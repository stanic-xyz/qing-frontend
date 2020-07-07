<template>
  <div class="jvm-info">
    <el-table>
      <tr>
        <th>参数</th>
        <th>描述</th>
        <th>当前值</th>
      </tr>
      <tr>
        <td>
          <el-card color="purple">jvm.memory.max</el-card>
        </td>
        <td>JVM 最大内存</td>
        <td>{{jvm.memory.max}} MB</td>
      </tr>
      <tr>
        <td>
          <el-card color="purple">jvm.memory.committed</el-card>
        </td>
        <td>JVM 可用内存</td>
        <td>{{jvm.memory.committed}} MB</td>
      </tr>
      <tr>
        <td>
          <el-card color="purple">jvm.memory.used</el-card>
        </td>
        <td>JVM 已用内存</td>
        <td>{{jvm.memory.used}} MB</td>
      </tr>
      <tr>
        <td>
          <el-card color="cyan">jvm.buffer.memory.used</el-card>
        </td>
        <td>JVM 缓冲区已用内存</td>
        <td>{{jvm.buffer.memory.used}} MB</td>
      </tr>
      <tr>
        <td>
          <el-card color="cyan">jvm.buffer.count</el-card>
        </td>
        <td>当前缓冲区数量</td>
        <td>{{jvm.buffer.count}} 个</td>
      </tr>
      <tr>
        <td>
          <el-card color="green">jvm.threads.daemon</el-card>
        </td>
        <td>JVM 守护线程数量</td>
        <td>{{jvm.threads.daemon}} 个</td>
      </tr>
      <tr>
        <td>
          <el-card color="green">jvm.threads.live</el-card>
        </td>
        <td>JVM 当前活跃线程数量</td>
        <td>{{jvm.threads.live}} 个</td>
      </tr>
      <tr>
        <td>
          <el-card color="green">jvm.threads.peak</el-card>
        </td>
        <td>JVM 峰值线程数量</td>
        <td>{{jvm.threads.peak}} 个</td>
      </tr>
      <tr>
        <td>
          <el-card color="orange">jvm.classes.loaded</el-card>
        </td>
        <td>JVM 已加载 Class 数量</td>
        <td>{{jvm.classes.loaded}} 个</td>
      </tr>
      <tr>
        <td>
          <el-card color="orange">jvm.classes.unloaded</el-card>
        </td>
        <td>JVM 未加载 Class 数量</td>
        <td>{{jvm.classes.unloaded}} 个</td>
      </tr>
      <tr>
        <td>
          <el-card color="pink">jvm.gc.memory.allocated</el-card>
        </td>
        <td>GC 时, 年轻代分配的内存空间</td>
        <td>{{jvm.gc.memory.allocated}} MB</td>
      </tr>
      <tr>
        <td>
          <el-card color="pink">jvm.gc.memory.promoted</el-card>
        </td>
        <td>GC 时, 老年代分配的内存空间</td>
        <td>{{jvm.gc.memory.promoted}} MB</td>
      </tr>
      <tr>
        <td>
          <el-card color="pink">jvm.gc.max.data.size</el-card>
        </td>
        <td>GC 时, 老年代的最大内存空间</td>
        <td>{{jvm.gc.maxDataSize}} MB</td>
      </tr>
      <tr>
        <td>
          <el-card color="pink">jvm.gc.live.data.size</el-card>
        </td>
        <td>FullGC 时, 老年代的内存空间</td>
        <td>{{jvm.gc.liveDataSize}} MB</td>
      </tr>
      <tr>
        <td>
          <el-card color="blue">jvm.gc.pause.count</el-card>
        </td>
        <td>系统启动以来GC 次数</td>
        <td>{{jvm.gc.pause.count}} 次</td>
      </tr>
      <tr>
        <td>
          <el-card color="blue">jvm.gc.pause.totalTime</el-card>
        </td>
        <td>系统启动以来GC 总耗时</td>
        <td>{{jvm.gc.pause.totalTime}} 秒</td>
      </tr>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
