<template>
  <div id="container"></div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      currentDate: new Date(),
      time: "2020年01月15日 21时50分19秒",
      loading: true,
      animeInfo: {
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
      commentList: [
        {
          createTime: {
            nano: 0,
            year: 2021,
            monthValue: 7,
            dayOfMonth: 28,
            hour: 23,
            minute: 21,
            second: 40,
            month: "JULY",
            dayOfWeek: "WEDNESDAY",
            dayOfYear: 209,
            chronology: {
              id: "ISO",
              calendarType: "iso8601",
            },
          },
          updateTime: {
            nano: 0,
            year: 2021,
            monthValue: 7,
            dayOfMonth: 28,
            hour: 23,
            minute: 21,
            second: 39,
            month: "JULY",
            dayOfWeek: "WEDNESDAY",
            dayOfYear: 209,
            chronology: {
              id: "ISO",
              calendarType: "iso8601",
            },
          },
          searchValue: "",
          createBy: "",
          updateBy: "",
          remark: "",
          id: "1420404091520241666",
          cid: 20000001,
          username: "游客",
          content: "啦啦啦",
          ipAddress: null,
        },
      ],
    };
  },
  mounted() {},
  created() {},
  methods: {},
};
</script>
<style scoped>
/*@import "../assets/css/detail.css";*/
</style>
