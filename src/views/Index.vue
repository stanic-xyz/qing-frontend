<template>
  <div id="container">
    <my-tips />
    <div class="div_right baseblock">
      <div class="blocktitle">每周放送列表</div>
      <div class="blockcontent">
        <ul id="new_anime_btns">
          <li
            id="new_anime_page_btn_1"
            :class="{ new_anime_btn_current: count === 1 }"
            class="new_anime_btn highlighttag"
            @click="count = 1"
          >
            周一
          </li>
          <li
            id="new_anime_page_btn_2"
            :class="{ new_anime_btn_current: count === 2 }"
            class="new_anime_btn highlighttag"
            @click="count = 2"
          >
            周二
          </li>
          <li
            id="new_anime_page_btn_3"
            :class="{ new_anime_btn_current: count === 3 }"
            class="new_anime_btn highlighttag"
            @click="count = 3"
          >
            周三
          </li>
          <li
            id="new_anime_page_btn_4"
            :class="{ new_anime_btn_current: count === 4 }"
            class="new_anime_btn highlighttag"
            @click="count = 4"
          >
            周四
          </li>
          <li
            id="new_anime_page_btn_5"
            :class="{ new_anime_btn_current: count === 5 }"
            class="new_anime_btn highlighttag"
            @click="count = 5"
          >
            周五
          </li>
          <li
            id="new_anime_page_btn_6"
            :class="{ new_anime_btn_current: count === 6 }"
            class="new_anime_btn new_anime_btn"
            @click="count = 6"
          >
            周六
          </li>
          <li
            id="new_anime_page_btn_0"
            :class="{ new_anime_btn_current: count === 7 }"
            class="new_anime_btn highlighttag"
            @click="count = 7"
          >
            周日
          </li>
        </ul>

        <ul
          id="new_anime_page"
          attr="v-if=${entry.key +'== count'}"
          each="entry:${data.recentMap.entrySet()}"
        >
          <li class="one_new_anime" each="anime,iter : ${entry.value}">
            <a
              class="one_new_anime_name"
              href="@{'/detail/'+${anime.id}+'/index.html'}"
              text="${anime.name}"
            ></a>
            <a
              class="one_new_anime_ji"
              href="@{'/detail/'+${anime.id}+'/index.html'}"
              text="${anime.premiereDate}"
            ></a>
            <div attr="v-if=${!anime.isNew}" class="one_anime_new">new!</div>
          </li>
        </ul>
      </div>
      <hr class="hrspace clear" style="width: 95%" />
      <div class="blocktitle">最近更新</div>
      <div class="blockcontent">
        <ul id="anime_update">
          <li v-for="anime in animeList" :key="anime.id" class="one_new_anime">
            <a
              class="one_new_anime_name"
              href="/detail/index.html"
              style="width: 220px"
              >{{ anime.name }}</a
            >
            <span
              class="anime_update_date asciifont"
              style="margin-left: 12px"
              text="${anime.premiereDate}"
            ></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="div_left baseblock">
      <div class="blocktitle">
        <router-link to="/recommend">每日推荐</router-link>
      </div>
      <div class="blockcontent">
        <ul class="ul_li_a5">
          <li v-for="anime in animeList" :key="anime.id" class="anime_icon1">
            <router-link :to="{ path: '/detail', query: { id: anime.id } }">
              <img
                :alt="anime.name"
                :src="anime.coverUrl"
                :title="anime.playHeat"
                class="anime_icon1_img"
                height="165px"
                loading="lazy"
                referrerpolicy="no-referrer"
                width="120px"
              />
              <span class="anime_icon1_name1">{{ "[TV 01-12]ddddd" }}</span>
            </router-link>
            <router-link
              :to="{ path: '/detail', query: { id: anime.id } }"
              class="anime_icon1_name_a"
            >
              <div class="anime_icon1_name">{{ anime.name }}</div>
            </router-link>
          </li>
        </ul>
      </div>
      <hr class="hrspace clear" style="width: 98%" />
      <div class="blocktitle">
        <router-link to="/update">最近更新</router-link>
      </div>
      <div class="blockcontent">
        <ul class="ul_li_a5">
          <li v-for="anime in animeList" :key="anime.id" class="anime_icon1">
            <router-link :to="{ path: '/detail', params: { id: anime.id } }">
              <img
                :alt="anime.name"
                :src="anime.coverUrl"
                :title="anime.playHeat"
                class="anime_icon1_img"
                height="165px"
                loading="lazy"
                referrerpolicy="no-referrer"
                width="120px"
              />
              <span class="anime_icon1_name1">{{ "[TV 01-12]" }}</span>
            </router-link>
            <router-link
              :to="{ path: '/detail', params: { id: anime.id } }"
              class="anime_icon1_name_a"
            >
              <div class="anime_icon1_name">{{ anime.name }}</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script lang="ts">
import MyTips from "@/views/common/MyTips.vue";

export default {
  components: { MyTips },
  data() {
    return {
      count: 1,
      animeList: [],
      demoData: {
        id: 20000001,
        name: "海贼王",
        instruction:
          "电视动画《航海王》改编自尾田荣一郎创作的同名长篇少年漫画，动画由东映动画制作。 海贼王哥尔·D·罗杰在临死前曾留下了关于其毕生的财富“One Piece”的消息，由此引得群雄并起，众海盗们为了这笔传说中的巨额财富展开争夺，各种势力、政权不断交替，整个世界进入了动荡混乱的“大海贼时代”。 生长在东海某小村庄的路飞受到海贼香克斯的精神指引，决定成为一名出色的海盗。为了达成这个目标，并找到万众瞩目的One Piece，路飞踏上艰苦的旅程。一路上他遇到了无数磨难，也结识了索隆、娜美、山治、乌索普、罗宾等一众性格各异的好友。他们携手一同展开充满传奇色彩的大冒险。",
        districtId: 1,
        districtName: "日本",
        coverUrl: "http://localhost/age/H6eec4b52f5ed449b8583e5ab518e7849p.jpg",
        typeId: 1,
        typeName: "TV",
        originalName: "ONE PIECE",
        otherName: "航海王 / ワンピース",
        author: "尾田栄一郎",
        company: "東映動画",
        premiereDate: {
          year: 1999,
          month: "OCTOBER",
          monthValue: 10,
          dayOfMonth: 20,
          chronology: {
            id: "ISO",
            calendarType: "iso8601",
          },
          dayOfWeek: "WEDNESDAY",
          era: "CE",
          dayOfYear: 293,
          leapYear: false,
        },
        playStatus: "连载",
        plotType: "搞笑 冒险 热血 励志",
        tags: "搞笑 冒险 热血 励志",
        officialWebsite: "http://www.fujitv.co.jp/b_hp/onepiece/index.html",
        playHeat: "3953",
        playList: null,
      },
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
@import "../assets/css/index.css";
</style>
