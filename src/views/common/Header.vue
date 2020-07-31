<template>
  <div></div>
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
    create: function () {},
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
