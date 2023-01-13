<script lang="ts" setup>
import { ref } from "vue";
import { userInfoStore } from "@/stores/session";
import { qingHttp } from "@/utils/service";
import { QingHttpRequestConfig } from "@/utils/http/types";
import { formatToken } from "@/utils/auth";

// “ref”是用来存储值的响应式数据源。
// 理论上我们在展示该字符串的时候不需要将其包装在 ref() 中，
// 但是在下一个示例中更改这个值的时候，我们就需要它了。
const username = ref("");
const password = ref("");

class Test {}

interface Tee {}

function handleBtn() {
  console.log("账号：", username.value, "密码:", password.value);

  const defaultConfig: QingHttpRequestConfig = {
    // 请求超时时间
    timeout: 10000,
    headers: {
      Accept: "application/json, text/plain, */*",
      Authorization: formatToken("12312312"),
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    },
    // 数组格式参数序列化（https://github.com/axios/axios/issues/5142）
  };

  type Result = {
    success: boolean;
    data?: {
      /** 列表数据 */
      list: Array<any>;
      /** 总数 */
      total?: number;
    };
  };

  qingHttp
    .post<any, Result>("api/authorize/formLogin", {
      params: {
        username: username.value,
        password: password.value,
      },
    })
    .then(function (response) {
      console.log("发起请求成功了", response);
      const userInfoSto = userInfoStore();
      // userInfoSto.token = response.data.token;
    })
    .catch(function (error) {
      console.log(error);
    });
}
</script>

<template>
  <div id="container">
    <div class="main">
      <div class="icon" style="'background-image:url(/img/logo.jpg)'"></div>
      <input
        id="username"
        v-model="username"
        name="username"
        placeholder="电子邮箱/手机号/用户名"
        type="text"
      />
      <input
        id="password"
        v-model="password"
        autocomplete="current-password"
        placeholder="密码"
        type="password"
      />
      <input
        id="ConfirmPassword"
        autocomplete="new-password"
        class="hidden"
        placeholder="确认密码"
        type="password"
      />
      <button @click="handleBtn">登录</button>

      <div class="switch">
        <a
          id="LoginWithGithub"
          aria-checked="true"
          href="/authorize/login"
          role="checkbox"
          tabindex="0"
          >Github</a
        >|
        <a id="Login" aria-checked="true" role="checkbox" tabindex="0">登录</a>
        |
        <a id="SignUp" aria-checked="false" role="checkbox" tabindex="0"
          >注册</a
        >
        |
        <a id="ResetPassword" aria-checked="false" role="checkbox" tabindex="0"
          >重置密码</a
        >
      </div>
    </div>
    <footer>
      <a
        aria-checked="false"
        href="https://www.chenyunlong.cn/tos"
        target="_blank"
        >服务条款</a
      >
      |
      <a
        aria-checked="false"
        href="https://www.chenyunlong.cn/privacy"
        target="_blank"
        >隐私政策</a
      ><br />© 2020 Stanic 保留所有权利
    </footer>
  </div>
</template>

<style scoped>
body {
  background-color: red;
}
</style>
