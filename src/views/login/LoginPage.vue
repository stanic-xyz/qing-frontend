<script lang="ts" setup>
import { ref } from "vue";

// “ref”是用来存储值的响应式数据源。
// 理论上我们在展示该字符串的时候不需要将其包装在 ref() 中，
// 但是在下一个示例中更改这个值的时候，我们就需要它了。
const username = ref("stanic");
const password = ref("stanic");

function handleBtn() {
  console.log("账号：", username.value, "密码:", password.value);
}
</script>

<template>
  <div id="container">
    <img alt="" class="bg bg-img" src="../../../public/loginbg.jpg" />
    <div class="bg bg-cover"></div>
    <main>
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
    </main>
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

<style>
#container {
  align-items: center;
  animation: fadeIn 0.25s linear;
  cursor: default;
  display: flex;
  font-family: Helvetica, pingfang sc, microsoft yahei, sans-serif;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  position: absolute;
  -webkit-tap-highlight-color: transparent;
  text-align: center;
  -webkit-text-size-adjust: 100%;
  -webkit-user-select: none;
  width: 100%;
  user-select: none;
}

.bg-img {
  display: block;
  -webkit-filter: blur(10px);
  filter: blur(10px);
  object-fit: cover;
  transform: scale(1.1);
}

.bg {
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transition: all 0.25s;
  width: 100%;
  z-index: -1;
}

:root {
  --theme-color: rgb(0, 102, 204);
}

* {
  box-sizing: border-box;
  outline: none;
}

a {
  color: var(--theme-color);
  cursor: pointer;
  text-decoration: none;
  transition: all 0.25s;
}

a[aria-checked="false"]:hover {
  filter: brightness(1.2);
}

a[aria-checked="false"]:active {
  filter: brightness(0.8);
}

a[aria-checked="true"] {
  color: gray !important;
  cursor: default;
}

body {
  align-items: center;
  animation: fadeIn 0.25s linear;
  cursor: default;
  display: flex;
  font-family: Helvetica, pingfang sc, microsoft yahei, sans-serif;
  height: 100%;
  justify-content: center;
  margin: 0 auto;
  position: absolute;
  -webkit-tap-highlight-color: transparent;
  text-align: center;
  -webkit-text-size-adjust: 100%;
  -webkit-user-select: none;
  width: 100%;
  user-select: none;
}

footer {
  bottom: 20px;
  color: rgba(255, 255, 255, 0.35);
  font-size: 12px;
  line-height: 1.75;
  position: fixed;
  right: 30px;
  text-align: right;
  transition: all 0.25s;
}

button {
  background-color: var(--theme-color);
  border-radius: 5px;
  border-style: none;
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 16px;
  margin: 15px 0;
  padding: 10px 15px;
  transition: all 0.25s;
  width: 100%;
}

button:hover {
  filter: brightness(1.1);
}

button:active {
  background-color: #048;
}

input {
  -webkit-appearance: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: block;
  font-size: 14px;
  margin-top: 15px;
  padding: 10px 15px;
  width: 100%;
  transition: border-color 0.2s;
}

input:focus {
  border-color: var(--theme-color) !important;
}

main {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 20px 50px;
  display: block;
  padding: 30px;
  position: absolute;
  transition: all 0.25s;
  width: 400px;
}

.bg {
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  transition: all 0.25s;
  width: 100%;
  z-index: -1;
}

.bg-img {
  display: block;
  -webkit-filter: blur(10px);
  filter: blur(10px);
  object-fit: cover;
  transform: scale(1.1);
}

.bg-cover {
  background-image: radial-gradient(
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);
}

.dark a,
footer a {
  color: #569cd6;
}

.dark body {
  background-color: #232323;
}

.dark input {
  background-color: inherit;
  border-color: #2c2c2c;
  color: #fff;
}

.dark input:-webkit-autofill {
  box-shadow: 0 0 0 1000px #191919 inset;
  -webkit-text-fill-color: #fff;
}

.dark main {
  background-color: #191919;
  border-color: rgba(255, 255, 255, 0.03);
  box-shadow: rgba(0, 0, 0, 0.3) 0 20px 50px;
}

.grecaptcha-badge {
  visibility: hidden;
}

.hidden {
  display: none;
}

.icon {
  background-color: var(--theme-color);
  background-image: url("../../../public/logo.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 36px;
  border-radius: 5px;
  height: 60px;
  margin: 15px auto;
  width: 60px;
}

.switch {
  color: gray;
  font-size: 14px;
  margin: 20px 0 15px;
}

.user-icon {
  background-size: 60px;
  border-radius: 50%;
}

.warning {
  border-color: pink;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media screen and (max-width: 600px) {
  footer {
    bottom: -30px;
    opacity: 0;
  }

  main {
    background-color: transparent !important;
    border-color: transparent !important;
    box-shadow: none !important;
    padding: 0;
  }

  .bg {
    opacity: 0;
  }

  .dark {
    background-color: #191919;
  }
}

@media screen and (max-width: 450px) {
  body {
    display: initial;
    height: initial;
    justify-content: initial;
  }

  main {
    padding: 0 15px;
    width: 100%;
  }

  .bg {
    display: none;
  }
}
</style>
