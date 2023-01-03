<script lang="ts" setup>
import { RouterView } from "vue-router";
import moment from "moment";
import axios from "axios";

let config = {
  method: "get",
  url: "https://mock.apifox.cn/m1/1876271-0-default/api/sys/file/bucket/list",
  headers: {
    "User-Agent": "Apifox/1.0.0 (https://www.apifox.cn)",
    Accept: "*/*",
    Host: "mock.apifox.cn",
    Connection: "keep-alive",
  },
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

console.log("服务启动----：", moment.now());
</script>

<template>
  <RouterView />
</template>

<style module></style>
