<template>
  <div id="top">
    <div id="logo">
      <a href="/" title="AGE动漫">AGE动漫</a>
    </div>
    <div class="loginout">
      <span class="svg_title svg_title_user"></span>
      <a id="comment_user" class="loginout_btn2" href="/">登陆</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      time: new Date(),
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    create: function () {
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>

</style>
