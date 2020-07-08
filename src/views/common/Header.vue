<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1">
      <router-link to="home">首页</router-link>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3">消息中心</el-menu-item>
    <el-menu-item index="4">
      <router-link to="bar">订单管理</router-link>
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      time: new Date(),
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    create: function() {},
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
