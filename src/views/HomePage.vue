<template>
  <!-- <el-calendar v-model="currentDate"></el-calendar> -->
  <HelloWorld></HelloWorld>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'HomePage',
  components: { HelloWorld },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      currentDate: new Date(),
      time: '2020年01月15日 21时50分19秒',
      loading: true,
      jvm: {
        memory: {
          max: 0,
          committed: 0,
          used: 0
        },
        buffer: {
          memory: {
            used: 0
          },
          count: 0
        },
        threads: {
          daemon: 0,
          live: 0,
          peak: 0
        },
        classes: {
          loaded: 0,
          unloaded: 0
        },
        gc: {
          memory: {
            allocated: 0,
            promoted: 0
          },
          maxDataSize: 0,
          liveDataSize: 0,
          pause: {
            totalTime: 0,
            count: 0
          }
        }
      }
    }
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    create() {
      this.$notify.success({
        title: 'Info',
        message: '这是一条没有关闭按钮的消息',
        showClose: false
      })
    }
  }
}
</script>
<style>
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
