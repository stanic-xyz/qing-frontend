<template>
  <div id="app">
    <!-- 路由出口 -->
    <!-- navbar -->
    <header></header>
    <!-- / navbar -->

    <!-- nav -->
    <v-nav></v-nav>
    <!-- / nav -->

    <!-- nav -->
    <v-setings></v-setings>
    <!-- / nav -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <my-header/>
    <!-- content -->
    <div class="app-content">
      <div class="app-content-body">
        <transition mode="out-in" enter-active-class="animated fadeInUp" leave-active-class="animated fadeInDown">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <!-- /content -->
  </div>
</template>

<script>
import request from './utils/request'
import MyHeader from './views/common/Header'
import Header from './components/block/Header'

export default {
  name: 'App',
  components: {
    MyHeader: MyHeader,
    Header: Header
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  created() {
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
