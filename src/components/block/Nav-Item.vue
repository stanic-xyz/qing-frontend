<template>

  <router-link class="nav_button" :class="{nav_button_current: isActive}" :to="navData.route">
    <span>{{ navData.groupName }}</span>
  </router-link>

</template>
<script>

export default {
  name: 'nav-item',
  data() {
    return {
      isShow: this.navData.groupActive
    }
  },
  computed: {
    isActive() {
      return this.$route.name !== undefined ? this.$route.path === this.navData.route : false
    }
  },
  props: ['navData'],
  methods: {
    toggle: function () {
      this.isShow = !this.isShow
    }
  }
}
</script>
