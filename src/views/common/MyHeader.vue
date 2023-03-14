<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import Notification from "@/views/common/Notification.vue";

const data = reactive({
  time: new Date(),
  activeIndex: 1,
  links: [
    {
      name: "首页",
      index: 1,
      path: "/index",
    },
    {
      name: "每日推荐",
      index: 2,
      path: "/recommend",
    },
    {
      name: "最近更新",
      index: 3,
      path: "/update",
    },
    {
      name: "目录",
      index: 4,
      path: "/catalog",
    },
    {
      name: "排行榜",
      index: 5,
      path: "/rank",
    },
  ],
});

onMounted(() => {
  console.log(data);
});

function handleSelect(event: any) {
  data.activeIndex = event;
}
</script>

<template>
  <div id="top">
    <div id="logo">
      <router-link to="/index">AGE动漫</router-link>
    </div>
    <div class="loginOut">
      <span class="svg_title svg_title_user"></span>
      <a
        id="comment_user"
        class="loginOut_btn2"
        href="http://localhost:8080/api/authorize/auth/login"
        target="_self"
        >登陆
      </a>
      <a
        id="comment_user"
        class="loginOut_btn2"
        href="http://localhost:8080/api/authorize/auth/logout"
        target="_self"
        >退出
      </a>
    </div>
  </div>
  <div id="nav">
    <router-link
      v-for="(link, index) in data.links"
      v-bind:key="index"
      :class="{ nav_button_current: data.activeIndex === link.index }"
      class="nav_button"
      v-bind:to="link.path"
      @click="handleSelect(link.index)"
      >{{ link.name }}
    </router-link>
  </div>
  <Notification url="https://www.chenyunlong.cn"></Notification>
</template>
<style scoped src="../../assets/css/common/header.css"></style>
