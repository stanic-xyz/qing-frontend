<template>
  <div class="jvm-info">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="alert" border>
      <a type="success" :show-icon="true">
        <div slot="message">
          <span class="el-icon-info"></span>
          数据获取时间 {{this.time}}
          <el-link :underline="false" @click="create" style="margin-left: 24px">点击刷新</el-link>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      'time': new Date()
    }
  },
  methods: {
    create: function() {
      console.log(this.time)
    }
  }
}
</script>
