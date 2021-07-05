<template>
  <li :class="{active:isShow}">
    <a class="auto" @click="toggle">
            <span class="pull-right text-muted">
                      <i class="fa fa-fw fa-angle-right text"></i>
                      <i class="fa fa-fw fa-angle-down text-active"></i>
                    </span>
      <i :class="navData.groupIcon"></i>
      <span>{{ navData.groupName }}</span>
    </a>
    <ul class="nav nav-sub dk">
      <li class="nav-sub-header">
        <a>
          <span>{{ navData.groupName }}</span>
        </a>
      </li>
      <slot></slot>
    </ul>
  </li>
</template>
<script>
export default {
  name: 'nav-item',
  data() {
    return {
      isShow: this.navData.groupActive
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
