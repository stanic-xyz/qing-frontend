import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Login from '../views/login/Login'
import db from '../utils/localstorage'
import Index from '../views/Index'
import AnimeInfo from '../views/anime/AnimeInfo'
import NotFoundComponent from '../views/error/404'

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Bar = {template: '<div>bar</div>'}

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  {name: 'bar', path: '/bar', component: Bar},
  {path: '/', component: Index},
  {path: '/ok', component: AnimeInfo},
  {path: '/home', component: HomePage},
  {path: '/login', component: Login},
  {name: 'notfound', path: '*', component: NotFoundComponent}
]

Vue.use(VueRouter)
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。

const contexts = require.context('../views', true, /\.vue$/)
contexts.keys().forEach(value => {
  const path = value.substr(value.indexOf('/'), value.lastIndexOf('.') - 1)
  const componentLocation = value.substr(value.indexOf('.') + 1, value.lastIndexOf('.') - 1)
  const componentName = componentLocation.substr(componentLocation.lastIndexOf('/') + 1)
  routes.push({
    path: path,
    name: componentName,
    component: () => import(/* webpackChunkName: "alarm" */ `../views${componentLocation}`)
  })
})

const router = new VueRouter({
  // (缩写) 相当于 routes: routes
  // mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = false
  let userInfo = db.get('userInfo')
  // 这里特别简单，就是判断用户是否存在
  if (userInfo !== null) {
    isAuthenticated = true
  }
  if (to.path !== '/login' && !isAuthenticated) {
    db.clear()
    next({path: '/login'})
  } else {
    next()
  }
})

export default router
