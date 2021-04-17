// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import request from './utils/request'
import db from './utils/localstorage'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.use(Element, {size: 'small', zIndex: 3000})
Vue.use(db)
Vue.prototype.$post = request.post
Vue.prototype.$get = request.get
Vue.config.silent = true
// eslint-disable-next-line no-new
// eslint-disable-next-line no-unused-vars
let vm = new Vue({
  router,
  el: '#app',
  components: {App},
  template: '<App/>'
})
