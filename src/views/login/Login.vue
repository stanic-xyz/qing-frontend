<template>
  <div id="container">
    <img class="bg bg-img" alt="" src="https://cdn.jsdelivr.net/gh/shangzhenyang/assets@master/img/bing/20201212.jpg">
    <div class="bg bg-cover"></div>
    <b-btn-close @click="closeTest()">关闭狗子{{ newTodoText }}</b-btn-close>
  </div>
</template>
<script>

export default {
  data() {
    return {
      newTodoText: '哈哈哈',
      visitCount: 0,
      hideCompletedTodos: false,
      todos: [],
      error: null
    }
  },
  created() {
    console.log("关闭了");
  },
  methods: {
    closeTest: function () {
      this.newTodoText = "沟工程承" + new Date()
    }
  }
}
</script>

<style>
#container {
  align-items: center;
  animation: fadeIn .25s linear;
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
  transition: all .25s;
  width: 100%;
  z-index: -1;
}
</style>
