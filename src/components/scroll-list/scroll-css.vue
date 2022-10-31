<template>
  <thead>
    <tr>
      <th>测试</th>
      <th>测试</th>
      <th>测试</th>
      <th>测试</th>
      <th>测试</th>
      <th>测试</th>
    </tr>
  </thead>
  <div class="itemTableBox">
    <div
      class="TItemUL"
      :class="{ 'animate-up': animateUp }"
      @mouseenter="Stop()"
      @mouseleave="Up()"
    >
      <div class="TItem" v-for="Fitem in data" :key="Fitem.sn">
        <div class="TI_Dwidth">{{ Fitem.sn }}</div>
        <div class="TI_Dwidth">{{ Fitem.TI_place }}</div>
        <div class="TI_Dwidth">{{ Fitem.TI_type }}</div>
        <div class="TI_info">{{ Fitem.TI_info }}</div>
        <div class="TI_UPTime">{{ Fitem.TI_UPTime }}</div>
        <div class="TI_Dwidth">{{ Fitem.TI_state }}</div>
      </div>
      <div class="TItem" v-if="data.length == 0">
        <div class="TI_default" style="width: 100%">暂无数据</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'

const animateUp = ref(false)
const timer = ref<any>(null)
const data = reactive([
  {
    sn: '01',
    TI_place: 'A部件',
    TI_type: '准确率',
    TI_info: '温度超过多少度，温度过高',
    TI_UPTime: '2021-10-01 09:23:42',
    TI_state: '未处理',
  },
  {
    sn: '02',
    TI_place: 'A部件',
    TI_type: '准确率',
    TI_info: '温度超过多少度，温度过高',
    TI_UPTime: '2021-10-01 09:23:42',
    TI_state: '未处理',
  },
  {
    sn: '03',
    TI_place: 'A部件',
    TI_type: '准确率',
    TI_info: '温度超过多少度，温度过高',
    TI_UPTime: '2021-10-01 09:23:42',
    TI_state: '未处理',
  },
  {
    sn: '04',
    TI_place: 'A部件',
    TI_type: '准确率',
    TI_info: '温度超过多少度，温度过高',
    TI_UPTime: '2021-10-01 09:23:42',
    TI_state: '未处理',
  },
  {
    sn: '05',
    TI_place: 'A部件',
    TI_type: '准确率',
    TI_info: '温度超过多少度，温度过高',
    TI_UPTime: '2021-10-01 09:23:42',
    TI_state: '未处理',
  },
  {
    sn: '06',
    TI_place: 'A部件',
    TI_type: '准确率',
    TI_info: '温度超过多少度，温度过高',
    TI_UPTime: '2021-10-01 09:23:42',
    TI_state: '未处理',
  },
])

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
.itemTableBox {
  width: 80%;
  height: 330px;
  background: #ff0;
  margin: 20px auto;
  padding-top: 1px;
  overflow: hidden;
  .TItem {
    width: 100%;
    height: @TItemHeight;
    background: rgba(255, 0, 0, 0.2);
    line-height: @TItemHeight;
    margin-top: 8px;
    display: flex;
    .TI_default {
      height: @TItemHeight;
      float: left;
      font-size: 24px;
      font-weight: 400;
      line-height: @TItemHeight;
      text-align: center;
      color: #fff;
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
