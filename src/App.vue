<template>
  <div id="app" v-title :data-title="title">
    <my-header/>
    <my-nav title="标题"/>
    <div class="app-content">
      <div class="app-content-body">
        <transition mode="out-in" enter-active-class="animated fadeInUp" leave-active-class="animated fadeInDown">
          <!-- content -->
          <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
          <!-- /content -->
        </transition>
      </div>
    </div>
    <my-footer/>
  </div>
</template>

<script>
import request from './utils/request'
import MyHeader from './views/common/Header'
import MyFooter from './views/common/Footer'
import MyNav from './views/common/MyNav'

export default {
  name: 'App',
  components: {
    MyNav,
    MyFooter,
    MyHeader: MyHeader
  },
  data() {
    return {
      title: '这是标题',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  created() {
    this.title = '修改后的标题'
    console.log(request)
    console.log('created！')
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
@import "assets/css/common.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 1024px;
  margin: 0 auto;
}
</style>
