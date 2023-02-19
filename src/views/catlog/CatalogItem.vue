<script lang="ts" setup>
import type { PropType } from "vue";
import { onMounted } from "vue";
import type { Anime } from "@/api/anime";

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
  console.log("发布信息了", props.anime);
});
</script>

<template>
  <div class="cell blockdiff2">
    <router-link :to="`/anime/${props.anime.id}`" class="cell_poster">
      <img
        :src="props.anime.coverUrl"
        alt="发布信息"
        class="anime_icon1_img"
        height="208px"
        referrerpolicy="no-referrer"
        width="150px"
      />
      <span class="newname">第120话</span></router-link
    >
    <div class="cell_imform">
      <div>
        <router-link :to="`/anime/${props.anime.id}`" class="cell_imform_name"
          >{{ props.anime.name }}
        </router-link>
      </div>
      <div class="cell_imform_kvs">
        <div class="cell_imform_kv">
          <span class="cell_imform_tag">动画种类：</span>
          <span class="cell_imform_value">{{ props.anime.typeName }}</span>
        </div>
        <div class="cell_imform_kv">
          <span class="cell_imform_tag">原版名称：</span>
          <span class="cell_imform_value">{{ props.anime.originalName }}</span>
        </div>
        <div class="cell_imform_kv">
          <span class="cell_imform_tag">其他名称：</span>
          <span class="cell_imform_value">{{ props.anime.otherName }}</span>
        </div>
        <br />
        <div class="cell_imform_kv">
          <span class="cell_imform_tag">首播时间：</span>
          <span class="cell_imform_value">{{ props.anime.premiereDate }}</span>
        </div>
        <div class="cell_imform_kv">
          <span class="cell_imform_tag">播放状态：</span>
          <span class="cell_imform_value">{{ props.anime.playStatus }}</span>
        </div>
        <div class="cell_imform_kv">
          <span class="cell_imform_tag">原作：</span>
          <span class="cell_imform_value">{{ props.anime.author }}</span>
        </div>
        <br />
        <div class="cell_imform_kv">
          <span class="cell_imform_tag">剧情类型：</span>
          <span class="cell_imform_value">{{ props.anime.plotType }}</span>
        </div>
        <div class="cell_imform_kv">
          <span class="cell_imform_tag">制作公司：</span>
          <span class="cell_imform_value">{{ props.anime.company }}</span>
        </div>
        <div class="cell_imform_kv cell_imform_kv_desc">
          <span class="cell_imform_tag">简介</span>
          <div class="cell_imform_desc">
            {{ props.anime.instruction }}
          </div>
        </div>
      </div>
      <div class="cell_imform_btns">
        <router-link
          :to="`/play/${props.anime.id}`"
          class="nbutton2 cell_res_button"
          >资源详情
        </router-link>
        <router-link
          :to="`play/${props.anime.id}`"
          class="nbutton2 cell_res_button"
          >在线播放
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped src="../../assets/css/catalog.css"></style>
