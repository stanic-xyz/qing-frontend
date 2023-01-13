<script lang="ts" setup>
import { RouterView } from "vue-router";
import moment from "moment";

console.log("服务启动----：", moment.now());
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
