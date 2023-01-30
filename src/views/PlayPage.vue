<script lang="ts" setup>
import { onMounted, ref, shallowRef } from "vue";

const el = ref();

const data = shallowRef({
  activeIndex: "1",
  activeIndex2: "1",
  currentDate: new Date(),
  time: "2020年01月15日 21时50分19秒",
  loading: true,
  videoUrl:
    "https://1251316161.vod2.myqcloud.com/007a649dvodcq1251316161/75b32a815285890809903778875/5cAXY7aMUEQA.mp4",
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
    premiereDate: "2022-01-11",
    playStatus: "连载",
    plotType: "搞笑 冒险 热血 励志",
    tags: "搞笑 冒险 热血 励志",
    officialWebsite: "http://www.fujitv.co.jp/b_hp/onepiece/index.html",
    playHeat: "3953",
  },
});

onMounted(() => {
  el.value; // <div>
});
</script>
<template>
  <div id="container">
    <p>当前播放的动漫ID：{{ $route.params.animeId }}</p>
    <div class="baseblock">
      <div class="blocktitle">
        <h4 id="detailname">
          <router-link :to="`/anime/${data.animeInfo.id}`"
            >{{ data.animeInfo.name }}
          </router-link>
        </h4>
      </div>
      <div class="line"></div>
      <div class="blockcontent">
        <table>
          <tbody>
            <tr>
              <td>
                <router-link :to="`'/anime/${data.animeInfo.id}`">
                  <img
                    id="play_poster_img"
                    alt="番剧剧照"
                    height="260"
                    referrerpolicy="no-referrer"
                    src="../assets/img/anime/伤物语.jpg"
                    width="187"
                  />
                </router-link>
              </td>
              <td>
                <ul id="play_imform">
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">地区：</span>
                    <span class="play_imform_val">{{
                      data.animeInfo.districtName
                    }}</span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">动画种类：</span>
                    <span class="play_imform_val">{{
                      data.animeInfo.typeName
                    }}</span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">原作：</span>
                    <span class="play_imform_val">{{
                      data.animeInfo.author
                    }}</span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">原版名称：</span>
                    <span class="play_imform_val">{{
                      data.animeInfo.originalName
                    }}</span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">其它名称：</span>
                    <span class="play_imform_val">{{
                      data.animeInfo.otherName
                    }}</span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">制作公司：</span>
                    <span class="play_imform_val">{{
                      data.animeInfo.company
                    }}</span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">首播时间：</span>
                    <span class="play_imform_val">{{
                      data.animeInfo.premiereDate
                    }}</span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">播放状态：</span>
                    <span class="play_imform_val">{{
                      data.animeInfo.playStatus
                    }}</span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">剧情类型：</span>
                    <span class="play_imform_val">{{
                      data.animeInfo.tags
                    }}</span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">更新时间：</span>
                    <span class="play_imform_val">{{
                      data.animeInfo.premiereDate
                    }}</span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">官方网站：</span>
                    <span class="play_imform_val">{{
                      data.animeInfo.officialWebsite
                    }}</span>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped src="../assets/css/play.css"></style>
