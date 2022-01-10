<template>
  <footer id="footer">
    <div id="footer_container">
      <div class="pannel clearfix">
        <div class="pannel_head clearfix">
          <h3 class="title">快速链接：</h3>
        </div>
        <ul class="link_text list_scroll clearfix">
          <li>
            <a class="text_muted" href="https://www.chenyunlong.cn" title="博客地址" target="_blank">博客地址</a>
          </li>
          <li>
            <a class="text_muted" href="https://www.chenyunlong.cn/admin" title="博客后台地址"
               target="_blank">博客后台地址</a>
          </li>
          <li>
            <a class="text_muted" href="https://status.chenyunlong.cn" title="状态查看" target="_blank">服务器状态</a>
          </li>
        </ul>

        <span style="color: #DDD;">
                如果你有任何关于此网站的问题，请发邮件至
                <a href="mailto:bangumi@chenyunlong.cn">bangumi@chenyunlong.cn</a>
            </span>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'MyFooter',
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
