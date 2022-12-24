<script lang="ts" setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log("服务加载了");
});
</script>

<template>
  <ExceptionPageVue></ExceptionPageVue>
  <MyHeader></MyHeader>
</template>
