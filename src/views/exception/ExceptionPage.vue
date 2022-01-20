<template>
  <header class="panel-cover">
    <div class="panel-main">
      <div class="panel-main__inner panel-inverted">
        <div class="panel-main__content">
          <router-link :to="{path:'/'}">
            <img alt="AGEFANS LOGO"
                 class="panel-cover__logo logo"
                 src="../../assets/img/logo.jpg"
                 title="AGE动漫" width="400"/>
          </router-link>
          <hr class="panel-cover__divider">
          <p class="panel-cover__description">对不起，您要找的页面被AGE君丢失了 (＞人＜)</p>
          <hr class="panel-cover__divider panel-cover__divider--secondary">
          <p class="footer">BANGUMI动漫 © 2020 - 2022 chenyunlong.cn</p>
        </div>
      </div>
      <div class="panel-cover--overlay cover-slate"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ExceptionPage'
}
</script>

<style scoped>
@import "../../assets/css/404.css";

</style>
