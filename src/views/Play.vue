<template>
  <div id="container">
    <div id="new_tip1" include="common/header :: notification('play')"></div>
    <div class="baseblock">
      <div class="blocktitle">
        <h4 id="detailname">
          <a href="${'/detail/'+data?.animeInfo?.id}">
            {{ animeInfo.name }}
          </a>
        </h4>
      </div>
      <div class="line"></div>
      <div class="blockcontent">
        <table>
          <tbody>
            <tr>
              <td>
                <a href="${'/detail/'+data?.animeInfo?.id}">
                  <img
                    id="play_poster_img"
                    :alt="'番剧剧照'"
                    :src="animeInfo.coverUrl"
                    height="260"
                    referrerpolicy="no-referrer"
                    width="187"
                  />
                </a>
              </td>
              <td>
                <ul id="play_imform">
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">地区：</span>
                    <span class="play_imform_val">{{
                      animeInfo.districtName
                    }}</span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">动画种类：</span>
                    <span class="play_imform_val">{{
                      animeInfo.typeName
                    }}</span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">原作：</span>
                    <span class="play_imform_val">{{ animeInfo.author }}</span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">原版名称：</span>
                    <span
                      class="play_imform_val"
                      text="${data?.animeInfo?.getOriginalName()}"
                    ></span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">其它名称：</span>
                    <span
                      class="play_imform_val"
                      text="${data?.animeInfo?.otherName}"
                    ></span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">制作公司：</span>
                    <span
                      class="play_imform_val"
                      text="${data?.animeInfo?.company}"
                    ></span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">首播时间：</span>
                    <span
                      class="play_imform_val"
                      text="${data?.animeInfo?.premiereDate}"
                    ></span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">播放状态：</span>
                    <span
                      class="play_imform_val"
                      text="${data?.animeInfo?.playStatus}"
                    ></span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">剧情类型：</span>
                    <span
                      class="play_imform_val"
                      text="${data?.animeInfo?.tags}"
                    ></span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">更新时间：</span>
                    <span
                      class="play_imform_val"
                      text="${data?.animeInfo?.premiereDate}"
                    ></span>
                  </li>
                  <li class="play_imform_kv">
                    <span class="play_imform_tag">官方网站：</span>
                    <span
                      class="play_imform_val"
                      text="${data?.animeInfo?.officialWebsite}"
                    ></span>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="baseblock">
      <div class="blockcontent">
        <div id="pp" class="baseblock2">
          <div id="playlist-div" class="baseblock">
            <div class="blocktitle">在线播放：</div>
            <ul id="menu0" class="menu0">
              <li
                class="${listInfo.id == data?.episodeInfo?.playlistId ? 'on' : '' }"
                data-index="${iterStat.index}"
                each="listInfo,iterStat : ${data?.animeInfo?.playList}"
                onclick="setTab(0,this.getAttribute('data-index'))"
                style="display: block"
                text="${listInfo?.name}"
              ></li>
            </ul>
            <div id="main0" class="main0">
              <div
                :style="{ display: 'block' }"
                class="movurl"
                each="playList,status:${data.animeInfo.playList}"
              >
                <ul>
                  <li each="episode:${playList?.episodeList}">
                    <a
                      class="on"
                      href="@{/play/{animeId}(playid=${episode?.id},animeId=${data.animeInfo.id})}"
                      target="_self"
                      text="${episode.name}"
                      title="${episode.name}"
                    >
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!--                    <div id="ageframeblock" class="content" if="${data?.episodeInfo ne null}">-->
          <div id="ageframeblock" class="content">
            <div id="ageframediv" style="width: 980px; height: 551px">
              <!--              <script inline="javascript">-->
              <!--                //定义一个变量：videoObject，用来做为视频初始化配置-->
              <!--                var videoObject = {-->
              <!--                  container: '#ageframediv', //“#”代表容器的ID，“.”或“”代表容器的class-->
              <!--                  variable: 'player', //播放函数名称，该属性必需设置，值等于下面的new ckplayer()的对象-->
              <!--                  video: [[${data?.episodeInfo?.url}]]//视频地址-->
              <!--                  // video: "https://1251316161.vod2.myqcloud.com/007a649dvodcq1251316161/75b32a815285890809903778875/5cAXY7aMUEQA.mp4"-->
              <!--                }-->
              <!--                var player = new ckplayer(videoObject)//初始化播放器-->
              <!--              </script>-->
            </div>
          </div>
        </div>
      </div>

      <div class="baseblock">
        <div class="blockcontent">
          <div id="wangpan-div" class="baseblock2">
            <div class="blocktitle">网盘资源：</div>
            <div class="blockcontent">
              <span class="res_links">
                <a
                  class="res_links_a"
                  href="@{/link/20190209/0}"
                  target="_blank"
                  >[TV 01-12+OVABD-1080P]</a
                >
                <span class="res_links_pswd_tag">(提取码:</span
                ><span class="res_links_pswd">1407)</span>
              </span>
              <br />
            </div>
          </div>
        </div>
      </div>

      <div class="spaceblock1"></div>
      <div class="baseblock">
        <div class="blocktitle">简介：</div>
        <div class="line"></div>
        <div class="blockcontent">
          <div class="play_desc">
            <p text="${data?.animeInfo?.instruction}"></p>
          </div>
        </div>
      </div>
      <div class="spaceblock1"></div>
      <div class="baseblock">
        <div class="blocktitle">反馈：</div>

        <div class="report_div">
          <form id="report_form" action="/report" method="GET">
            <div>
              <input
                id="report_aid"
                name="animeid"
                type="hidden"
                value="20190209"
              />
              <label>
                <input
                  name="link_invalid"
                  type="checkbox"
                  value="1"
                />链接失效</label
              >
              <label>
                <input
                  name="bad_quality"
                  type="checkbox"
                  value="1"
                />资源质量差</label
              >
              <label>
                <input
                  name="some_missing"
                  type="checkbox"
                  value="1"
                />集数缺失</label
              >
              <label>
                <input name="other" type="checkbox" value="1" />其他</label
              >
              <input
                autocapitalize="off"
                autocomplete="off"
                autocorrect="off"
                name="other_text"
                placeholder="请告诉AGE详细情况~~"
                spellcheck="0"
                wrap="SOFT"
              />
              <input class="nbutton" type="submit" value="提交" />
            </div>
          </form>
        </div>
      </div>
      <div class="spaceblock1"></div>
      <div class="baseblock">
        <div class="blocktitle">看过《NULL &amp; PETA》的人还看过：</div>
        <div class="line"></div>
        <div class="blockcontent">
          <ul class="ul_li_a8">
            <li class="anime_icon1">
              <a href="/detail/20170042">
                <img
                  class="anime_icon1_img"
                  data-src="//sc02.alicdn.com/kf/H913d39ec1c4d48829d5018875503d13bh.jpg"
                  height="205"
                  referrerpolicy="no-referrer"
                  src="/H913d39ec1c4d48829d5018875503d13bh.jpg"
                  width="148"
              /></a>
              <a href="/detail/20170042">
                <div class="anime_icon1_name">徒然喜欢你</div>
              </a>
            </li>

            <li class="anime_icon1">
              <a href="/detail/20180031">
                <img
                  class="anime_icon1_img"
                  data-src="//sc02.alicdn.com/kf/Haca4ba804e2243f68964e932b2e32eadY.jpg"
                  height="205"
                  referrerpolicy="no-referrer"
                  src="/Haca4ba804e2243f68964e932b2e32eadY.jpg"
                  width="148"
              /></a>
              <a href="/detail/20180031">
                <div class="anime_icon1_name">优C世界</div>
              </a>
            </li>

            <li class="anime_icon1">
              <a href="/detail/20170069">
                <img
                  class="anime_icon1_img"
                  data-src="//sc02.alicdn.com/kf/H4287714e3b83442aa4fe8e18d3ba88e4m.jpg"
                  height="205"
                  referrerpolicy="no-referrer"
                  src="/H4287714e3b83442aa4fe8e18d3ba88e4m.jpg"
                  width="148"
              /></a>
              <a href="/detail/20170069">
                <div class="anime_icon1_name">有顶天家族 第二季</div>
              </a>
            </li>

            <li class="anime_icon1">
              <a href="/detail/20170142">
                <img
                  class="anime_icon1_img"
                  data-src="//sc02.alicdn.com/kf/Hb5dcf2c5404c4f07a1b18e1a4ae384ace.jpg"
                  height="205"
                  referrerpolicy="no-referrer"
                  src="/Hb5dcf2c5404c4f07a1b18e1a4ae384ace.jpg"
                  width="148"
              /></a>
              <a href="/detail/20170142">
                <div class="anime_icon1_name">
                  KiraKira☆光之美少女 A La Mode 清脆出炉！回忆的法式千层酥！
                </div>
              </a>
            </li>

            <li class="anime_icon1">
              <a href="/detail/20110051">
                <img
                  class="anime_icon1_img"
                  data-src="//sc02.alicdn.com/kf/H5053d55f53b04bd8b5fb341085e6fe96y.jpg"
                  height="205"
                  referrerpolicy="no-referrer"
                  src="/H5053d55f53b04bd8b5fb341085e6fe96y.jpg"
                  width="148"
              /></a>
              <a href="/detail/20110051">
                <div class="anime_icon1_name">恶魔阿萨谢尔在召唤你</div>
              </a>
            </li>

            <li class="anime_icon1">
              <a href="/detail/20170097">
                <img
                  class="anime_icon1_img"
                  data-src="//sc02.alicdn.com/kf/H04440c7bcfed4fd99f014b2e05fb01a1u.jpg"
                  height="205"
                  referrerpolicy="no-referrer"
                  src="/H04440c7bcfed4fd99f014b2e05fb01a1u.jpg"
                  width="148"
              /></a>
              <a href="/detail/20170097">
                <div class="anime_icon1_name">结城友奈是勇者 鹫尾须美之章</div>
              </a>
            </li>

            <li class="anime_icon1">
              <a href="/detail/20140071">
                <img
                  class="anime_icon1_img"
                  data-src="//sc02.alicdn.com/kf/H1c81c2a7246d447cbcf363d0514a30499.jpg"
                  height="205"
                  referrerpolicy="no-referrer"
                  src="/H1c81c2a7246d447cbcf363d0514a30499.jpg"
                  width="148"
              /></a>
              <a href="/detail/20140071">
                <div class="anime_icon1_name">棺姬嘉依卡</div>
              </a>
            </li>

            <li class="anime_icon1">
              <a href="/detail/20190052">
                <img
                  class="anime_icon1_img"
                  data-src="//sc02.alicdn.com/kf/H94f6b0966c2140cba8510dec831046e0v.jpg"
                  height="205"
                  referrerpolicy="no-referrer"
                  src="/H94f6b0966c2140cba8510dec831046e0v.jpg"
                  width="148"
              /></a>
              <a href="/detail/20190052">
                <div class="anime_icon1_name">一个人的〇〇小日子</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="spaceblock1"></div>
      <div class="baseblock">
        <div class="blocktitle">留言板：</div>
        <div class="line"></div>

        <div class="blockcontent">
          <form id="comment_form" action="javascript:void(0)" method="GET">
            <div>
              <input
                id="comment_id"
                name="cid"
                type="hidden"
                value="20190209"
              />
              <textarea
                id="comment_content"
                autocapitalize="off"
                autocomplete="off"
                autocorrect="off"
                csrf_token="kqYFPKw9DOko88jkfLKSATbDkz6ipQBD9pYXLohUtVGXpMhQPdkP7lyYGDwiNifm"
                name="comment_content"
                placeholder="说点什么吧"
                spellcheck="false"
                tid="20180132"
                wrap="SOFT"
              ></textarea>
              <label class="comment_imform_tag">昵称：</label>
              <input
                id="comment_user"
                autocapitalize="off"
                autocomplete="off"
                autocorrect="off"
                class=""
                name="comment_user"
                placeholder="名字"
                readonly="true"
                spellcheck="false"
                value="游客"
                wrap="SOFT"
              />
              <input class="nbutton" name="" type="submit" />
            </div>
          </form>

          <!-- 评论列表 -->
          <ul id="comment_list" style="margin-top: 16px">
            <li class="comment">
              <hr class="hrspace2" />
              <div class="comment_cell_user">游客120023001980153</div>
              <div class="comment_cell_content">
                <div>●●●○○ 4.0-</div>
                <div class="comment_cell_time asciifont">
                  2020-09-12 17:56:57
                </div>
              </div>
            </li>
            <li class="comment">
              <hr class="hrspace2" />
              <div class="comment_cell_user">游客12002300198083</div>
              <div class="comment_cell_content">
                <div>◆◆◆◆◇ 4.0-</div>
                <div class="comment_cell_time asciifont">
                  2020-09-08 07:41:29
                </div>
              </div>
            </li>
            <li class="comment">
              <hr class="hrspace2" />
              <div class="comment_cell_user">游客12002300197066</div>
              <div class="comment_cell_content">
                <div>★★★★☆ 4.0</div>
                <div class="comment_cell_time asciifont">
                  2020-09-01 14:59:12
                </div>
              </div>
            </li>
            <li class="comment">
              <hr class="hrspace2" />
              <div class="comment_cell_user">游客183016201790255</div>
              <div class="comment_cell_content">
                <div>ha hi hu he ho</div>
                <div class="comment_cell_time asciifont">
                  2020-09-01 14:40:19
                </div>
              </div>
            </li>
            <li class="comment">
              <hr class="hrspace2" />
              <div class="comment_cell_user">游客120023001900182</div>
              <div class="comment_cell_content">
                <div>na ni nu ne no</div>
                <div class="comment_cell_time asciifont">
                  2020-09-01 11:12:40
                </div>
              </div>
            </li>
            <li class="comment">
              <hr class="hrspace2" />
              <div class="comment_cell_user">游客11701520156012</div>
              <div class="comment_cell_content">
                <div>在飞行</div>
                <div class="comment_cell_time asciifont">
                  2020-09-01 09:31:24
                </div>
              </div>
            </li>
            <li class="comment">
              <hr class="hrspace2" />
              <div class="comment_cell_user">游客17206901350194</div>
              <div class="comment_cell_content">
                <div>說真的如果晚上有人讀教科書給我聽可能真的比較容易入睡</div>
                <div class="comment_cell_time asciifont">
                  2020-08-27 15:40:03
                </div>
              </div>
            </li>
            <hr class="hrspace2" />
            <div id="current_comment_page" page=""></div>
          </ul>

          <!-- 评论翻页 -->
          <div class="spaceblock1"></div>
          <ul class="comment_page">
            <li>
              <a
                class="pbutton pbutton_current asciifont"
                href="javascript:void(0)"
                >首页</a
              >
            </li>

            <li>
              <a
                class="pbutton pbutton_current asciifont"
                href="javascript:void(0)"
                >1</a
              >
            </li>

            <li>
              <a
                class="pbutton asciifont"
                href="javascript:void(0)"
                onclick="__age_show_comments_page(1)"
                >2</a
              >
            </li>

            <li>
              <a
                class="pbutton asciifont"
                href="javascript:void(0)"
                onclick="__age_show_comments_page(2)"
                >3</a
              >
            </li>

            <li>
              <a
                class="pbutton asciifont"
                href="javascript:void(0)"
                onclick="__age_show_comments_page(3)"
                >4</a
              >
            </li>

            <li>
              <a
                class="pbutton asciifont"
                href="javascript:void(0)"
                onclick="__age_show_comments_page(4)"
                >5</a
              >
            </li>

            <li>
              <a
                class="pbutton asciifont"
                href="javascript:void(0)"
                onclick="__age_show_comments_page(5)"
                >6</a
              >
            </li>

            <li>
              <a
                class="pbutton asciifont"
                href="javascript:void(0)"
                onclick="__age_show_comments_page(1)"
                >下一页</a
              >
            </li>

            <li>
              <a
                class="pbutton asciifont"
                href="javascript:void(0)"
                onclick="__age_show_comments_page(12)"
                >尾页</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import HelloWorld from "./anime/HelloWorld.vue";

export default {
  name: "HomePage",
  components: { HelloWorld },
  data() {
    return {
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
    };
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    create() {
      this.$notify.success({
        title: "Info",
        message: "这是一条没有关闭按钮的消息",
        showClose: false,
      });
    },
  },
};
</script>
<style>
@import "../assets/css/play.css";

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
