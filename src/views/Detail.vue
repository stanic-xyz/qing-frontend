<template>
  <div id="container">
    <div class="div_left">
      <div class="baseblock">
        <div class="blockcontent">
          <img referrerpolicy="no-referrer" class="poster" width="256px" height="356px"
               :src="animeInfo.coverUrl" :alt="animeInfo.name">
        </div>
      </div>
      <div class="baseblock">
        <div class="blockcontent">
          <div class="baseblock2">
            <div class="blocktitle detail_title1">基本信息：</div>
            <ul class="blockcontent">
              <li class="detail_imform_kv">
                <span class="detail_imform_tag">地区：</span>
                <span class="detail_imform_value">{{ animeInfo.districtName }}</span>
                <a class="detail_imform_show_full" href="javascript:detail_show_full();">&lt;&lt;展开</a>
              </li>
              <li class="detail_imform_kv">
                <span class="detail_imform_tag">动画种类：</span>
                <span class="detail_imform_value">{{ animeInfo.typeName }}</span>
              </li>
              <li class="detail_imform_kv">
                <span class="detail_imform_tag">动画名称：</span>
                <span class="detail_imform_value">{{ animeInfo.name }}</span>
              </li>
              <li class="detail_imform_kv">
                <span class="detail_imform_tag">原版名称：</span>
                <span class="detail_imform_value">{{ animeInfo.originalName }}</span>
              </li>
              <li class="detail_imform_kv">
                <span class="detail_imform_tag">原作：</span>
                <span class="detail_imform_value">{{ animeInfo.author }}</span>
              </li>
              <li class="detail_imform_kv">
                <span class="detail_imform_tag">制作公司：</span>
                <span class="detail_imform_value">{{ animeInfo.company }}</span>
              </li>
              <li class="detail_imform_kv">
                <span class="detail_imform_tag">首播时间：</span>
                <span class="detail_imform_value">{{ dateFormat(animeInfo.premiereDate) }}</span>
              </li>
              <li class="detail_imform_kv">
                <span class="detail_imform_tag">播放状态：</span>
                <span class="detail_imform_value">{{ animeInfo.playStatus }}</span>
              </li>
              <li class="detail_imform_kv">
                <span class="detail_imform_tag">剧情类型：</span>
                <span class="detail_imform_value">{{ animeInfo.plotType }}</span>
              </li>
              <li class="detail_imform_kv">
                <span class="detail_imform_tag">标签：</span>
                <span class="detail_imform_value">{{ animeInfo.tags }}</span>
              </li>
              <li class="detail_imform_kv">
                <span class="detail_imform_tag">官方网站：</span>
                <span class="detail_imform_value">
                  <a :href="animeInfo.officialWebsite" target="_blank">{{ animeInfo.officialWebsite }}</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="baseblock">
        <div class="blockcontent">
          <div class="baseblock2">
            <div class="blocktitle detail_title1">相关动画：</div>
            <ul class="blockcontent">

              <li class="relates_series">
                <a href="/detail/20170004">为美好的世界献上祝福！ 第二季</a>
              </li>

              <li class="relates_series">
                <a href="/detail/20160084">为美好的世界献上祝福！OAD</a>
              </li>

              <li class="relates_series">
                <a href="/detail/20180187">为美好的世界献上祝福！红传说</a>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="div_right">
      <div class="baseblock">
        <div class="blockcontent">
          <h4 class="detail_imform_name">{{ animeInfo.name }}</h4>
        </div>
      </div>
      <div class="blockline1" style="margin: 8px;"></div>
      <div class="baseblock">
        <div class="blockcontent">
          <div class="detail_imform_desc_pre">
            <p>{{ animeInfo.instruction }}</p>
          </div>
        </div>
      </div>
      <div class="blockline1" style="margin: 8px;"></div>
      <div id="playlist-div" class="baseblock">
        <div class="blocktitle">在线播放：</div>
        <ul class="menu0" id="menu0">
          <li style="display: block"
              each="listInfo,iterStat : ${data?.animeInfo?.playList}"
              class="${iterStat.index == 0 ? 'on' : '' }"
              text="${listInfo?.name}"
              data-index="${iterStat.index}"
              onclick="setTab(0,this.getAttribute('data-index'))">
          </li>
        </ul>
        <div class="main0" id="main0">
          <div class="movurl"
               each="playList,status:${data.animeInfo.playList}"
               style="display: block;">
            <ul>
              <li each="episode:${playList?.episodeList}">
                <a href="@{/play/{animeId}(playid=${episode?.id},animeId=${data.animeInfo.id})}"
                   target="_self"
                   title="${episode.name}"
                   text="${episode.name}">
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="blockline1" style="margin: 8px;"></div>
      <div id="wangpan-div" class="baseblock">
        <div class="blocktitle">网盘资源：</div>
        <div class="blockcontent">
          <span class="res_links">
            <a class="res_links_a" :href="'/link/'+animeInfo.id+'/0'" target="_blank">[TV 01-10+OVA 720P]</a>
            <span class="res_links_pswd_tag">(提取码:</span>
            <span class="res_links_pswd">fe5e)</span></span>
          <br>
        </div>
      </div>
      <div class="blockline1" style="margin: 8px;"></div>
      <div class="baseblock">
        <div class="blocktitle">反馈：</div>
        <div class="report_div">
          <form id="report_form" action="/report" method="GET">
            <div>
              <input id="report_aid" type="hidden" name="cid" th:value="${data?.animeInfo?.id}">
              <label>
                <input type="checkbox" name="link_invalid" value="1">链接失效</label>
              <label>
                <input type="checkbox" name="bad_quality" value="1">资源质量差</label>
              <label>
                <input type="checkbox" name="some_missing" value="1">集数缺失</label>
              <label>
                <input type="checkbox" name="other" value="1">其他</label>
              <input autocapitalize="off" autocomplete="off" name="detail" placeholder="请告诉我们详细情况~~"
                     spellcheck="true">
              <input class="nbutton" type="submit" value="提交">
            </div>
          </form>
        </div>
      </div>

      <!-- adv1 -->
      <div class="blockline1" style="margin: 8px;"></div>
      <div class="baseblock">
        <div class="blockcontent">
          <!-- switch -->
          <div style="padding-left: 8px;">
            <button class="switchbtn" id="btnrecommend" onclick="onbtnrecommend(this)">相关推荐</button>
            <button class="switchbtn switchbtn_current" id="btncomment" onclick="onbtncomment(this)">留言板
            </button>
          </div>
          <div id="recommend_block" class="switchblock" hidden="">
            <ul class="ul_li_a4">
              <li class="anime_icon1">
                <a href="/detail/20160111">
                  <img referrerpolicy="no-referrer" class="anime_icon1_img" width="148"
                       height="205"
                       src="https://sc02.alicdn.com/kf/H3e0ebe3098c345e9af4d0a68fc601667H.jpg"
                       data-src="https://sc02.alicdn.com/kf/H3e0ebe3098c345e9af4d0a68fc601667H.jpg"></a>
                <a href="/detail/20160111">
                  <div class="anime_icon1_name">伤物语</div>
                </a>
              </li>
              <li class="anime_icon1" each="anime:${data.relevant}">
                <a href="@{/detail/{animeId}(animeId=${anime.id})}">
                  <img referrerpolicy="no-referrer" class="anime_icon1_img" width="148"
                       height="205" src="${anime.coverUrl}" data-src="${anime.coverUrl}"></a>
                <a href="@{/detail/{animeId}(animeId=${anime.id})}">
                  <div class="anime_icon1_name" text="${anime.name}"></div>
                </a>
              </li>
            </ul>
          </div>
          <div id="comments_block" class="switchblock">

            <form id="comment_form" action="javascript:void(0)" method="GET">
              <div>
                <input id="comment_id" type="hidden" name="cid" th:value="${data?.animeInfo?.id}">
                <label for="comment_content"></label>
                <textarea id="comment_content" wrap="SOFT" spellcheck="false" autocapitalize="off"
                          autocomplete="off" placeholder="说点什么吧"
                          name="comment_content"
                          maxlength="255"
                          tid="20180132"
                          csrf_token="kqYFPKw9DOko88jkfLKSATbDkz6ipQBD9pYXLohUtVGXpMhQPdkP7lyYGDwiNifm"></textarea>
                <label class="comment_imform_tag" for="comment_user">昵称：</label>
                <input readonly id="comment_user"
                       name="comment_user" wrap="SOFT"
                       spellcheck="false" autocapitalize="off"
                       autocomplete="off"
                       placeholder="名字" value="游客">
                <input class="nbutton" type="submit" name="">
              </div>
            </form>

            <!-- 评论列表 -->
            <ul id="comment_list" style="margin-top: 16px;">
              <li v-for="comment in commentList" class="comment" :key="comment.id">
                <hr class="hrspace2">
                <div class="comment_cell_user">{{ comment.username }}</div>
                <div class="comment_cell_content">
                  <div>{{ comment.content }}</div>
                  <div class="comment_cell_time asciifont">
                    2020-09-07 16:41:46
                  </div>
                </div>
              </li>
              <hr class="hrspace2">
              <div id="current_comment_page"></div>
            </ul>

            <!-- 评论翻页 -->
            <div class="spaceblock1"></div>
            <ul class="comment_page">
              <li><a href="javascript:void(0)"
                     class="${data?.comments?.current == 1 ?'pbutton asciifont pbutton_current':'pbutton asciifont'}"
                     data-cid="${data?.animeInfo?.id}"
                     data-pages="${data?.comments?.getPages()}"
                     data-size="${data?.comments?.size}"
                     onclick="${data.comments.current==1}">首页</a>
              </li>

              <li each="index : ${#numbers.sequence(1,data?.comments?.pages)}">
                <a class="pbutton  asciifont" href="javascript:void(0)"
                   if="${(index - data?.comments?.current)<3 &&(index - data?.comments?.current)>-3}"
                   data-cid="${data?.animeInfo?.id}"
                   data-pages="${data?.comments?.getPages()}"
                   data-page-size="${data?.comments?.size}"
                   onclick="__s_show_comments_page(this.getAttribute('data-cid'),this.getAttribute('data-pages'),10)"
                   text="${index}">
                </a>
              </li>

              <li each="index : ${#numbers.sequence(1,data?.comments?.pages)}">
                <a class="pbutton  asciifont" href="javascript:void(0)"
                   if="${(index - data?.comments?.current)<3 &&(index - data?.comments?.current)>-3}"
                   data-cid="${data?.animeInfo?.id}"
                   data-pages="${data?.comments?.getPages()}"
                   data-page-size="${data?.comments?.size}"
                   onclick="__s_show_comments_page(this.getAttribute('data-cid'),this.getAttribute('data-pages'),10)"
                   text="下一页">
                </a>
              </li>

              <li><a href="javascript:void(0)"
                     class="${data?.comments?.current == data?.comments?.pages ?'pbutton asciifont pbutton_current':'pbutton asciifont'}"
                     data-cid="${data?.animeInfo?.id}"
                     data-pages="${data?.comments?.getPages()}"
                     data-page-size="${data?.comments?.size}"
                     onclick="__s_show_comments_page(this.getAttribute('data-cid'),this.getAttribute('data-pages'),10)">尾页</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- end div_right -->
  </div>
</template>

<script>
import HelloWorld from './anime/HelloWorld.vue'
import moment from 'moment'
import request from '../utils/request'

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
      animeInfo: {
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
        premiereDate: {
          'year': 1999,
          'month': 'OCTOBER',
          'monthValue': 10,
          'dayOfMonth': 20,
          'chronology': {
            'id': 'ISO',
            'calendarType': 'iso8601'
          },
          'dayOfWeek': 'WEDNESDAY',
          'era': 'CE',
          'dayOfYear': 293,
          'leapYear': false
        },
        playStatus: '连载',
        plotType: '搞笑 冒险 热血 励志',
        tags: '搞笑 冒险 热血 励志',
        officialWebsite: 'http://www.fujitv.co.jp/b_hp/onepiece/index.html',
        playHeat: '3953',
        playList: null
      },
      commentList: [
        {
          'createTime': {
            'nano': 0,
            'year': 2021,
            'monthValue': 7,
            'dayOfMonth': 28,
            'hour': 23,
            'minute': 21,
            'second': 40,
            'month': 'JULY',
            'dayOfWeek': 'WEDNESDAY',
            'dayOfYear': 209,
            'chronology': {
              'id': 'ISO',
              'calendarType': 'iso8601'
            }
          },
          'updateTime': {
            'nano': 0,
            'year': 2021,
            'monthValue': 7,
            'dayOfMonth': 28,
            'hour': 23,
            'minute': 21,
            'second': 39,
            'month': 'JULY',
            'dayOfWeek': 'WEDNESDAY',
            'dayOfYear': 209,
            'chronology': {
              'id': 'ISO',
              'calendarType': 'iso8601'
            }
          },
          'searchValue': '',
          'createBy': '',
          'updateBy': '',
          'remark': '',
          'id': 1420404091520241666,
          'cid': 20000001,
          'username': '游客',
          'content': '啦啦啦',
          'ipAddress': null
        }
      ]
    }
  },
  mounted() {
    request.get('/api/admin/anime/detail/' + this.$route.query.id)
      .then((result) => {
        this.animeInfo = result.data.data
      })
  },
  created() {
    this.$notify.success({
      title: 'Info',
      message: '这是一条没有关闭按钮的消息',
      showClose: false
    })
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    dateFormat: function (date) {
      return moment(date).format('YYYY-MM-DD')
    }
  }
}
</script>
<style>
@import "../assets/css/detail.css";

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
