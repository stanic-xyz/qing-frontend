<template>
  <div id="top">
    <div id="logo">
      <router-link :to="'/'">AGE动漫</router-link>
    </div>
    <div @click="handleSelect">测试信息</div>
    <div class="loginOut">
      <span class="svg_title svg_title_user"></span>
      <router-link id="comment_user" class="loginOut_btn2" to="/login"
        >登陆
      </router-link>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from "vue";

const data = reactive({
  time: new Date(),
  activeIndex: "1",
  activeIndex2: "1",
});

onMounted(() => {
  console.log(data);
});

function handleSelect(event: MouseEvent) {
  console.log(event.altKey);
}
</script>
<style></style>
