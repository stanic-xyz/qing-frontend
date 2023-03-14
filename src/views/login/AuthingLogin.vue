<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { userInfoStore } from "@/stores/session";
import { exchangeToken, getLogin } from "@/api/auth";
import { useRouter } from "vue-router";

// “ref”是用来存储值的响应式数据源。
// 理论上我们在展示该字符串的时候不需要将其包装在 ref() 中，
// 但是在下一个示例中更改这个值的时候，我们就需要它了。
const username = ref("string");
const password = ref("string");

onMounted(() => {
  console.log("登录中");
  const router = useRouter();

  var code1 = router.currentRoute.value.query.code;
  if (code1 === null) {
    alert("参数错误");
    return;
  }
  console.log("query", code1);
  console.log("query", router.currentRoute.value.query.state);

  exchangeToken(code1.toString(), "test").then(function (response) {
    console.log("发起请求成功", response);
    const userInfoSto = userInfoStore();
    userInfoSto.token = response.data.access_token;
    userInfoSto.username = "user那么少";
    alert(JSON.stringify(response.data));
    router.push("/profile");
  });
});

function handleBtn() {
  getLogin(username.value, password.value)
    .then(function (response) {
      console.log("发起请求成功了", response);
      const userInfoSto = userInfoStore();
      userInfoSto.token = response.data.data.token;
      userInfoSto.username = "user那么少";
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>

<template>
  <div id="container">
    <h1>登录中</h1>
  </div>
</template>

<style scoped src="../../assets/css/login.css"></style>
