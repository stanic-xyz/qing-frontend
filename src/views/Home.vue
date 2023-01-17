<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { getAnimeList } from "@/api/anime";

const pagination = ref({ current: 1, pageSize: 12, total: 0 });

class Anime {
  animeId?: number;
  animeName?: string;
  coverUrl?: string;
  premiereDate?: Date;
}

const animeInfoList = ref([
  {
    animeId: 0,
    animeName: "动漫一",
    coverUrl: "http",
    premiereDate: "2022-12-01",
  },
]);

const weekList = ref([
  {
    weekId: 1,
    name: "周一",
  },
  {
    weekId: 2,
    name: "周二",
  },
  {
    weekId: 3,
    name: "周三",
  },
  {
    weekId: 4,
    name: "周四",
  },
  {
    weekId: 5,
    name: "周五",
  },
  {
    weekId: 6,
    name: "周六",
  },
  {
    weekId: 7,
    name: "周日",
  },
]);
const productList = ref<Anime[]>([]);
const dataLoading = ref<boolean>(true);
const activeWeekIndex = ref(1);

interface AnimeDetailInfo {
  animeName?: string;
}

const getCardListData = async () => {
  await getAnimeList();

  pagination.value = {
    ...pagination.value,
    total: 2,
  };
};

onMounted(() => {
  getCardListData();
  for (let i = 0; i < 14; i++) {
    animeInfoList.value.push({
      animeId: i,
      animeName: "str",
      coverUrl: "http",
      premiereDate: "2022-12-01",
    });
  }
});
</script>

<template>
  <div>
    <div id="container">
      <div class="spaceblock1"></div>
      <div class="div_right baseblock">
        <div class="blocktitle">每周放送列表</div>
        <div class="blockcontent">
          <ul id="new_anime_btns">
            <li
              v-for="week in weekList"
              id="new_anime_page_btn_1"
              :key="week.weekId"
              :class="{
                new_anime_btn_current: activeWeekIndex === week.weekId,
              }"
              class="new_anime_btn highlighttag"
              @click="activeWeekIndex = week.weekId"
            >
              {{ week.name }}
            </li>
          </ul>

          <ul id="new_anime_page">
            <li
              v-for="anime in animeInfoList"
              :key="anime.animeId"
              class="one_new_anime"
            >
              <a
                class="one_new_anime_name"
                href="@{'/anime/'+${anime.id}+'/index.html'}"
                >{{ anime.animeName }}</a
              >
              <a
                class="one_new_anime_ji"
                href="'/anime/'+${anime.id}+'/index.html'}"
                >{{ anime.premiereDate }}</a
              >
              <div v-show="true" class="one_anime_new">new!</div>
            </li>
          </ul>
        </div>
        <hr class="hrspace clear" style="width: 95%" />
        <div class="blocktitle">最近更新</div>
        <div class="blockcontent">
          <ul id="anime_update">
            <li
              v-for="anime in animeInfoList"
              :key="anime.animeId"
              class="one_new_anime"
            >
              <a class="one_new_anime_name" style="width: 220px">
                {{ anime.animeName }}
              </a>
              <span
                class="anime_update_date asciifont"
                style="margin-left: 12px"
                >{{ anime.premiereDate }}</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="div_left baseblock">
        <div class="blocktitle">
          <a href="recommend">每日推荐</a>
        </div>
        <div class="blockcontent">
          <ul class="ul_li_a5">
            <li
              v-for="(anime, index) in animeInfoList"
              :key="index"
              class="anime_icon1"
            >
              <a href="/anime/anime.id/index.html'}">
                <img
                  :alt="anime.animeName"
                  :alt-title="anime.animeName"
                  :title="anime.animeName"
                  class="anime_icon1_img"
                  height="165px"
                  loading="lazy"
                  referrerpolicy="no-referrer"
                  src="../assets/img/anime/伤物语_small.jpg"
                  width="120px"
                />
                <span class="anime_icon1_name1" text="${'[TV 01-12]'}">{{
                  anime
                }}</span></a
              >
              <a
                class="anime_icon1_name_a"
                href="@{'detail/'+${anime.id}+'/index/index.html'}"
              >
                <div class="anime_icon1_name" text="${anime.name}"></div>
              </a>
            </li>
          </ul>
        </div>
        <hr class="hrspace clear" style="width: 98%" />
        <div class="blocktitle">
          <a href="update">最近更新</a>
        </div>
        <div class="blockcontent">
          <ul class="ul_li_a5">
            <li
              v-for="anime in animeInfoList"
              :key="anime.animeId"
              class="anime_icon1"
            >
              <a :href="'/anime/' + anime.animeId + '/index.html'">
                <img
                  alt="伤物语_small"
                  class="anime_icon1_img"
                  height="165px"
                  loading="lazy"
                  referrerpolicy="no-referrer"
                  src="../assets/img/anime/伤物语_small.jpg"
                  title="${'[TV 01-12]'}"
                  width="120px"
                />
                <span class="anime_icon1_name1" text="${'[TV 01-12]'}"
                  >[TV 01-12]</span
                ></a
              >
              <a
                class="anime_icon1_name_a"
                href="@{'detail/'+${anime.id}+'/index/index.html'}"
              >
                <div class="anime_icon1_name" text="${anime.name}"></div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<style scoped src="../assets/css/index.css"></style>
