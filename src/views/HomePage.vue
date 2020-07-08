<template>
  <div class="jvm-info">
    <el-container>
      <HelloWorld></HelloWorld>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'HelloWorld',
  components: {
    HelloWorld
  },
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
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
  mounted() {
    this.create()
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    create() {
      console.log('this is test')
      this.$notify.success({
        title: 'Info',
        message: '这是一条没有关闭按钮的消息',
        showClose: false
      })
      // this.$get('actuator', null)
    }
  }
}
</script>
<style>
.jvm-info {
  width: 100%;
}
.alert {
  text-align: left;
  margin: 10px;
}
</style>
