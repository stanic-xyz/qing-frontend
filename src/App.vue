<script lang="ts" setup>
import { RouterView } from "vue-router";
import moment from "moment";
import MyHeader from "@/views/common/MyHeader.vue";
import MyFooter from "@/views/common/MyFooter.vue";

console.log("服务启动----：", moment.now());
</script>

<template>
  <div class="root">
    <MyHeader />
    <RouterView />
    <MyFooter />
  </div>
</template>

<style scoped>
body {
  margin: 0;
}
</style>
