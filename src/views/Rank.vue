<template>
  <!-- <el-calendar v-model="currentDate"></el-calendar> -->
  <div id="container">
    <div class="spaceblock1"></div>
    <div class="div_left baseblock">
      <div class="blockcontent">
        <div class="baseblock2">
          <div class="blocktitle" style="">排行分类</div>
          <div class="blockcontent" style="padding: 0;">
            <div class="baseblock">
              <div class="blocktitlexx" style="">
                <a class="rank_tag rank_tag_current " href="/rank?tag='all')">所有动画播放排行</a>
              </div>
              <div class="blocktitlexx" style="">
                <a id="tagyears" href="javascript:" onclick="oncatsw(this);">
                  <span class="openorclose">-</span>
                  <span class="rank_tag">分类动画播放排行</span></a>
              </div>
              <ul id="cats" class="blockcontent" style="padding-left: 44px;">

                <li class="rankyear asciifont">
                  <a class="rank_tag_value "
                     href="@{/rank(tag='catyear&amp',value=${i})}"
                     each="i : ${#numbers.sequence(2020,2021)}"
                     text="${i}"></a>
                </li>
                <li class="rankyear asciifont">
                  <a class="rank_tag_value " href="@{/rank(tag='catyear&amp;',value='2000')}">2000以前</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="div_right baseblock">
      <div class="blockcontent">
        <div class="baseblock2">
          <div class="blocktitle">全部动画排行榜</div>
        </div>
        <div class="spaceblock1"></div>
        <div class="baseblock">
          <div class="blockcontent div_right_r_3">
            <ul class="div_right_r">
              <li class="rank_text" each="anime,iterStat :${animeList}" if="${iterStat.index<=24}">
                <span class="rank_text_idx rank_text_idx_top asciifont"> 1</span>
                <a href="@{/detail/{animeId}(animeId= ${anime.id})}">
                  <span class="rank_text_name">名称</span></a>
                <span class="rank_value asciifont" text="${anime.playHeat}">0</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
import HelloWorld from './anime/HelloWorld.vue'

export default {
  name: 'HomePage',
  components: {HelloWorld},
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      currentDate: new Date(),
      time: '2020年01月15日 21时50分19秒',
      loading: true
    }
  },
  mounted() {
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    create() {
      this.$notify.success({
        title: 'Info',
        message: '这是一条没有关闭按钮的消息',
        showClose: false
      })
    }
  }
}
</script>
<style>
.alert {
  text-align: left;
  margin: 10px;
}

.jvm-info {
  width: 100%;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
