<template>
  <div>{{ data.items }}}</div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";

onMounted(() => {
  console.log("Set the initial number of items");
  console.log(data.items.length);
});

let data = reactive({
  items: [
    {
      id: 20190015,
      name: "二十世纪电气目录",
      instruction:
        "京都动画宣布启动轻小说《二十世纪电气目录》的动画化企划。该作原著曾获第八届京都动画大奖鼓励奖，由结成弘传创作。在8月10日，KA 文库将正式发售这部作品。 故事发生在明治四十年（1907 年）在京都伏见居住的百川稻子什么都不擅长，每天都被父亲责骂，对于她来说的救赎就是祈祷神佛，某天一如往常她前往伏见稻荷神社参拜神明，遇到了一位自由奔放的少年坂本喜八，坂本喜八对稻子说不要信这些看不见的东西，从今之后将是电气时代。而此时稻子的父亲对稻子说了关于结婚的事情，而且是父亲单方面决定的，稻子本来是放弃抵抗认为自己的价值就是如此，但坂本喜八打开了稻子想要离开这个家的心声，带着稻子离开了这个封闭的家。阻止结婚的方法是找出奇书《二十世纪电气目录》，那是喜八童年时代写下的关于电气的预言书，而喜八过去的哥哥清六带走这本书之后下落不明，喜八和稻子为了寻找这本奇书在京都和滋贺等地逃窜，消失的「电气目录」和其背后隐藏的秘密都等待解开。",
      district: "日本",
      coverUrl:
        "https://anime-1255705827.cos.ap-guangzhou.myqcloud.com/H61229d2a12f746ea94159652a2686a5bF.jpg",
      type: "TV",
      originalName: "二十世紀電氣目録",
      otherName: "暂无",
      author: "暂无",
      company: "京都动画",
      premiereDate: "暂无",
      playStatus: "未播放",
      plotType: "爱情 奇幻",
      tags: "爱情 奇幻",
      officialWebsite: "http://www.kyotoanimation.co.jp/books/20thdenmoku/",
      playHeat: "10000",
      playList: [
        {
          id: 1401561508882215000,
          animeId: 20190015,
          name: "播放列表1",
          description: "播放列表1",
          episodeList: [
            {
              id: 1401561508911575000,
              animeId: 20190015,
              playlistId: 1401561508882215000,
              name: "CM",
              status: 1,
              uploaderName: "admin",
              uploaderId: null,
              uploadTime: null,
              url: "https://1251316161.vod2.myqcloud.com/007a649dvodcq1251316161/75b32a815285890809903778875/5cAXY7aMUEQA.mp4",
              orderNo: 0,
              animeEpisodeList: null,
            },
          ],
        },
      ],
    },
  ],
  fields: [
    { key: "id", label: "ID", sortable: false },
    { key: "coverUrl", label: "图片", sortable: false },
    { key: "name", label: "全名", sortable: true, sortDirection: "desc" },
    { key: "originalName", label: "原名", sortable: false },
    { key: "author", label: "作者", sortable: true, sortDirection: "desc" },
    { key: "officialWebsite", label: "主页", sortable: false },
    { key: "playStatus", label: "状态", sortable: false },
    {
      key: "isActive",
      label: "状态",
      sortable: false,
    },
    { key: "actions", label: "操作" },
  ],
  totalRows: 1,
  currentPage: 1,
  perPage: 5,
  pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
  sortBy: "",
  sortDesc: false,
  sortDirection: "asc",
  filter: null,
  filterOn: [],
  infoModal: {
    id: "info-modal",
    title: "",
    content: "",
  },
});
</script>

<style scoped></style>
