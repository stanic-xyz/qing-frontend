<template>
  <div id="container">
    <div class="spaceblock"></div>
    <div class="baseblock">
      <div class="blockcontent">
        <div class="spaceblock"></div>
        <ul class="ul_li_a6">
          <li v-for="anime in animeList" class="anime_icon2" :key="anime.id">
            <router-link :to="{path:'/detail',query:{id:anime.id}}">
              <img referrerpolicy="no-referrer" width="150px" height="208px" class="anime_icon2_img"
                   :src="anime.coverUrl" :alt="anime.name"
                   :title="anime.name">
              <span class="anime_icon1_name1">02:00 第10话</span>
            </router-link>
            <h4 class="anime_icon2_name">
              <router-link :to="{path:'/detail',query:{id:anime.id}}">
                {{ anime.name }}
              </router-link>
            </h4>
          </li>
        </ul>
      </div>
    </div>
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
      loading: true,
      animeList: [{
        id: 20000001,
        name: '海贼王',
        instruction: '电视动画《航海王》改编自尾田荣一郎创作的同名长篇少年漫画，动画由东映动画制作。 海贼王哥尔·D·罗杰在临死前曾留下了关于其毕生的财富“One Piece”的消息，由此引得群雄并起，众海盗们为了这笔传说中的巨额财富展开争夺，各种势力、政权不断交替，整个世界进入了动荡混乱的“大海贼时代”。 生长在东海某小村庄的路飞受到海贼香克斯的精神指引，决定成为一名出色的海盗。为了达成这个目标，并找到万众瞩目的One Piece，路飞踏上艰苦的旅程。一路上他遇到了无数磨难，也结识了索隆、娜美、山治、乌索普、罗宾等一众性格各异的好友。他们携手一同展开充满传奇色彩的大冒险。',
        districtId: 1,
        districtName: '日本',
        coverUrl: 'http://localhost/age/H6eec4b52f5ed449b8583e5ab518e7849p.jpg',
        typeId: 1,
        typeName: 'TV',
        originalName: 'ONE PIECE',
        otherName: '航海王 / ワンピース',
        author: '尾田栄一郎',
        company: '東映動画',
        premiereDate: '2022-01-11',
        playStatus: '连载',
        plotType: '搞笑 冒险 热血 励志',
        tags: '搞笑 冒险 热血 励志',
        officialWebsite: 'http://www.fujitv.co.jp/b_hp/onepiece/index.html',
        playHeat: '3953'
      }]
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
