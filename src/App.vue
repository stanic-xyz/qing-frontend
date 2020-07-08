<template>
  <div id="app">
    <MyHdeader/>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
// import request from './utils/request'
import MyHdeader from './views/common/Header'
export default {
  name: 'App',
  components: {
    MyHdeader
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  created() {
    // request.get('/test', {'name': 'stan'})
  },
  methods: {
    handleSelect(key, keyPath) {
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
