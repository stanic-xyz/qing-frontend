<script lang="ts" setup>
import type { PropType } from "vue";
import { onMounted } from "vue";
import type { Anime } from "@/api/anime";

onMounted(() => {});

const props = defineProps({
  anime: {
    type: Object as PropType<Anime>,
    required: false,
    name: {
      type: String,
      default: "动漫名称",
    },
    default: {
      id: 20000001,
      name: "海贼王",
      instruction:
        "电视动画《航海王》改编自尾田荣一郎创作的同名长篇少年漫画，动画由东映动画制作。 海贼王哥尔·D·罗杰在临死前曾留下了关于其毕生的财富“One Piece”的消息，由此引得群雄并起，众海盗们为了这笔传说中的巨额财富展开争夺，各种势力、政权不断交替，整个世界进入了动荡混乱的“大海贼时代”。 生长在东海某小村庄的路飞受到海贼香克斯的精神指引，决定成为一名出色的海盗。为了达成这个目标，并找到万众瞩目的One Piece，路飞踏上艰苦的旅程。一路上他遇到了无数磨难，也结识了索隆、娜美、山治、乌索普、罗宾等一众性格各异的好友。他们携手一同展开充满传奇色彩的大冒险。",
      districtId: 1,
      districtName: "日本",
      coverUrl:
        "http://localhost:8080/img/anime/%E4%BC%A4%E7%89%A9%E8%AF%AD.jpg",
      typeId: 1,
      typeName: "TV",
      originalName: "ONE PIECE",
      otherName: "航海王 / ワンピース",
      author: "尾田栄一郎",
      company: "東映動画",
      premiereDate: "2022-01-11",
      playStatus: "连载",
      plotType: "搞笑 冒险 热血 励志",
      officialWebsite:
        "http://localhost:8080/img/anime/%E4%BC%A4%E7%89%A9%E8%AF%AD.jpg",
      playHeat: "3953",
    } as Anime,
  },
});

onMounted(() => {
  console.log("加载成功");
});
</script>

<template>
  <div>
    <a :href="`/anime/${props.anime.animeId}/index.html'`">
      <img
        :alt="props.anime.name"
        :src="props.anime.coverUrl"
        class="anime_icon1_img"
        height="165px"
        loading="lazy"
        referrerpolicy="no-referrer"
        title="props.anime.name"
        width="120px"
      />
      <span class="anime_icon1_name1"> {{ props.anime.name }}</span></a
    >
    <a
      :href="`detail/${props.anime.animeId}/index/index.html`"
      class="anime_icon1_name_a"
    >
      <div class="anime_icon1_name">{{ props.anime.name }}</div>
    </a>
  </div>
</template>

<style scoped></style>
