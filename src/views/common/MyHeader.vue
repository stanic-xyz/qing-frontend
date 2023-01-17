<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import Notification from "@/views/common/Notification.vue";

const data = reactive({
  time: new Date(),
  activeIndex: 1,
  activeIndex2: 2,
  links: [
    {
      name: "首页",
      index: 1,
      path: "/home",
    },
    {
      name: "每日推荐",
      index: 2,
      path: "/catalog/index.html",
    },
    {
      name: "最近更新",
      index: 3,
      path: "/recommend/index.html",
    },
    {
      name: "目录",
      index: 4,
      path: "/catalog/index.html",
    },
    {
      name: "排行榜",
      index: 5,
      path: "/rank/index.html",
    },
  ],
});

onMounted(() => {
  console.log(data);
});

function handleSelect(event: MouseEvent) {
  console.log(event.altKey);
}
</script>

<template>
  <div id="top">
    <div id="logo">
      <router-link to="/home">AGE动漫</router-link>
    </div>
    <div class="loginOut">
      <span class="svg_title svg_title_user"></span>
      <router-link id="comment_user" class="loginOut_btn2" to="/login"
        >登陆
      </router-link>
    </div>
  </div>
  <div id="nav">
    <router-link
      v-for="(link, index) in data.links"
      v-bind:key="index"
      :class="{ nav_button_current: data.activeIndex === index }"
      class="nav_button"
      v-bind:to="link.path"
      >{{ link.name }}
    </router-link>
  </div>
  <Notification url="https://www.chenyunlong.cn"></Notification>
</template>
<style scoped>
/*top ==== ==== ==== ==== ==== ==== ==== ==== */
#top {
  box-sizing: border-box;
  height: 160px;
  padding: 10px 8px;
  background-color: #292929;
}

#logo {
  margin-top: 22px;
  margin-left: 8px;
  float: left;
}

#logo a {
  width: 215px;
  height: 85px;
  display: block;
  background: url("../../assets/img/logo.png") no-repeat;
  overflow: hidden;
  line-height: 300px;
}

.loginOut {
  float: right;
}

/*nav ==== ==== ==== ==== ==== ==== ==== ==== */

#nav {
  height: 56px;
  background-color: #292929;
}

.nav_button {
  box-sizing: border-box;
  display: inline-block;
  height: 56px;
  line-height: 56px;
  padding: 0 14px;
  font-size: 1.2em;
  text-decoration: none;
  margin-right: -4px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

.nav_button:hover,
.nav_button:active {
  background-color: #303030;
}

.nav_button_current {
  background-color: #303030;
}

.search_form {
  box-sizing: border-box;
  height: 40px;
  line-height: 40px;
  border: 1px solid #404041;
  border-radius: 1px;
  vertical-align: middle;
  background-color: #212122;
}

.search_input {
  font-size: 1em;
  border: none;
  box-sizing: border-box;
  height: 38px;
  line-height: 38px;
  width: 160px;
  padding: 0 6px;
  background-color: transparent;
  outline: none;
}

.search_input_ex {
  width: 200px;
}

.search_submit {
  float: right;
  box-sizing: border-box;
  width: 32px;
  height: 38px;
  background: url("../../assets/img/search.png") no-repeat 6px 9px;
  border: none;
  background-size: 20px 20px;
  text-align: center;
}

#top_search_from {
  float: right;
  margin: 8px 8px;
}

.sublink {
  box-sizing: border-box;
  display: inline-block;
  height: 56px;
  line-height: 56px;
  padding: 0 6px;
  font-size: 1.2em;
  color: #d0e0f0;
  margin-right: 14px;
}

.sublink_float {
  float: right;
}
</style>
