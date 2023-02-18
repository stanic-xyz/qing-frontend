<script lang="ts" setup>
import { onMounted, PropType } from "vue";
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
        :title="props.anime.name"
        class="anime_icon1_img"
        height="165px"
        loading="lazy"
        referrerpolicy="no-referrer"
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
