<template>
  <div>
    <iframe
      width="1280"
      height="720"
      src="https://www.youtube.com/embed/CYIntGsjNMs"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <iframe
      width="1280"
      height="720"
      src="https://www.youtube.com/embed/DXHgBUMnlvY"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <div v-for="item in mediaList" :key="item.media_id">
      <el-button class="badge_info">{{ item.badge }}</el-button>
      <el-button size="mini" @click="handleEdit(item.media_id,item.cover)">{{ item.media_id }}</el-button>
      <div>
        <b-img :src="item.cover" fluid alt="Responsive image"></b-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activity',
  data() {
    return {
      mediaList: [
        {
          badge: '会员专享',
          badge_info: {
            bg_color: '#FB7299',
            bg_color_night: '#BB5B76',
            text: '会员专享'
          },
          badge_type: 0,
          cover: 'http://i0.hdslb.com/bfs/bangumi/9d9cd5a6a48428fe2e4b6ed17025707696eab47b.png',
          index_show: '全26话',
          is_finish: 1,
          link: 'https://www.bilibili.com/bangumi/play/ss26801',
          media_id: 22718131,
          order: '831.5万追番',
          order_type: 'fav_count',
          season_id: 26801,
          title: '鬼灭之刃',
          title_icon: ''
        }
      ]
    }
  },
  created() {
    // console.log(this)
    console.log(this.mediaList)
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    }
  }
}
</script>
cnpm
<style>
</style>
