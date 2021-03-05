<template>
  <div>
    <h1>这里就是标题</h1>
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
