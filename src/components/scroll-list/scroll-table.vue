<template>
  <div class="table">
    <div class="thead">
      <tr>
        <th>id</th>
        <th>部件</th>
        <th>准确率</th>
        <th>温控</th>
        <th class="time">时间</th>
        <th>操作</th>
      </tr>
    </div>
    <div class="tbody">
      <tr
        :class="{ 'animate-up': animateUp }"
        @mouseenter="Stop()"
        @mouseleave="Up()"
        v-for="v in data"
        :key="v.sn"
      >
        <td>{{ v.sn }}</td>
        <td>{{ v.TI_place }}</td>
        <td>{{ v.TI_type }}</td>
        <td>{{ v.TI_info }}</td>
        <td class="time">{{ v.TI_UPTime }}</td>
        <td>{{ v.TI_state }}</td>
      </tr>
    </div>
  </div>
</template>

<!-- 
总结难点
实际的tbody的大小和table的大小一样，所以这个要超过你的thead才会隐藏
换成div就不会出现tbody和table的大小一致的问题
 -->
<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'

const props = withDefaults(
  defineProps<{
    data: any[]
  }>(),
  {},
)

const animateUp = ref(false)
const timer = ref<any>(null)

// 把父组件传递来的数据克隆一份，方便操作修改
const data = reactive([...props.data])

const scrollAnimate = () => {
  // 超出范围在后再进行滚动
  if (data.length >= 6) {
    timer.value = setInterval(() => {
      animateUp.value = true
      setTimeout(() => {
        data.push(data[0])
        data.shift()
        animateUp.value = false
      }, 500)
    }, 2000)
  }
}
onMounted(() => {
  scrollAnimate()
})

const Stop = () => {
  clearInterval(timer.value)
}
const Up = () => {
  scrollAnimate()
}
</script>

<style lang="less" scoped>
@TItemHeight: 58px;
.table {
  overflow: hidden;
  width: 80%;
  // height: 300px;
}
.thead {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: cornflowerblue;

  tr {
    display: flex;
    th {
      width: 100px;
    }
    .time {
      width: 280px;
    }
  }
}

.tbody {
  width: 100%;
  height: 260px;
  background: #ff0;
  overflow: hidden;
  tr {
    width: 100%;
    height: @TItemHeight;
    background: rgba(255, 0, 0, 0.2);
    line-height: @TItemHeight;
    margin-top: 8px;
    display: flex;
    td {
      height: @TItemHeight;
      float: left;
      font-size: 24px;
      font-weight: 400;
      width: 100px;
      line-height: @TItemHeight;
      text-align: center;
      color: #fff;
    }
    .time {
      width: 280px;
    }
    .TI_Dwidth {
      width: 200px;
      @extend .TI_default;
    }
    .TI_info {
      width: 374px;
      @extend .TI_default;
    }
    .TI_UPTime {
      width: 300px;
      @extend .TI_default;
    }
  }
  .animate-up {
    transition: all 0.5s ease-in-out;
    transform: translateY(-66px);
  }
}
</style>
