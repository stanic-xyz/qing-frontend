<template>
  <div id="top">
    <div id="logo">
      <router-link :to="'/'">AGE动漫</router-link>
    </div>
    <div class="loginout">
      <span class="svg_title svg_title_user"></span>
      <router-link id="comment_user" class="loginout_btn2" to="/login">登陆</router-link>
    </div>
  </div>
</template>
<script lang="ts">
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
    handleSelect(key: String, keyPath: String) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>

</style>
