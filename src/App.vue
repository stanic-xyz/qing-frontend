<template>
  <div id="app">
   <header>this is好dead</header>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
import request from './utils/request'
export default {
  name: 'App',
  data() {
    console.log(request)
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  created() {
    console.log(request)
  },
  methods: {
    handleSelect(key, keyPath) {
      // request.get('authrize/login', {token: 'this is home'})
      console.log(request)
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
