<template>
  <div class="scroll-list">
    <div ref="scollByFather" class="scollBy">
      <!-- 子盒子一 -->
      <div ref="scollByChildren" class="risktal">
        <div v-for="(item, index) in list" :key="index" class="riskItem">
          <div class="cricle" />
          <div class="name">
            {{ item.title }}
          </div>
          <div class="time">
            {{ item.time }}
          </div>
        </div>
      </div>
      <!-- 子盒子二 -->
      <div v-show="otherCopyShow" class="risktal">
        <div v-for="(item, index) in list" :key="index" class="riskItem">
          <div class="cricle" />
          <div class="name">
            {{ item.title }}
          </div>
          <div class="time">
            {{ item.time }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    list: any[]
  }>(),
  {},
)

// 获取父盒子的dom
const scollByFather = ref<any>()
// 获取子盒子的dom
const scollByChildren = ref<any>()
// 实现滚动需要vue3.0支持的组件
// onMounted页面渲染后执行的钩子函数 onUnmounted页面销毁执行的钩子函数
const scrollTimer = ref<any>(null)
//定义定时器,页面进入时加载、退出时销毁
const otherCopyShow = ref<boolean>(false)
// 当子盒子数据不够一页时不需要滚动，克隆子盒子不需要显示
const deviationY = 10
// 滚动距离精度值
const interval = 50
// 定时器循环时间

const funRun = () => {
  clearInterval(scrollTimer.value)
  scrollTimer.value = null
  // 1、判断是否需要滚动
  if (scollByFather.value.offsetHeight <= scollByChildren.value.offsetHeight) {
    otherCopyShow.value = true
  }
  // 2、定义计时器
  scrollTimer.value = setInterval(() => {
    funScrollDiv()
  }, interval)
}
const funScrollDiv = () => {
  // 3、子页面不够一页时清除计时器
  if (scollByFather.value.offsetHeight >= scollByChildren.value.offsetHeight) {
    clearInterval(scrollTimer.value)
    return
  }
  // 4、重置条件：子盒子全部滚动出去时，子盒子归位
  if (
    scollByFather.value.scrollTop >=
    scollByChildren.value.scrollHeight + deviationY
  ) {
    scollByFather.value.scrollTop = 0
  } else {
    // 5、开始移动 由于定时器时间很短，就会显示为无限滚动的效果
    scollByFather.value.scrollTop++
    scollByFather.value.scrollTo({
      top: scollByFather.value.scrollTop + 20,
      behavior: 'smooth',
    })
  }
}

onMounted(() => {
  funRun()
})
onUnmounted(() => {
  if (scrollTimer.value) {
    clearInterval(scrollTimer.value)
  }
})

// const funScrollDiv = () => {
//  if (scollByFather.value.offsetHeight >= scollByChildren.value.offsetHeight) {
//    clearInterval(scrollTimer.value);
//    return;
//  }
//  if (scollByFather.value.scrollTop >= scollByChildren.value.scrollHeight + deviationY) {
//    scollByFather.value.scrollTop = 0;
//  } else {
//    -- scollByFather.value.scrollTop ++
//    ++ scollByFather.value.scrollTop + 20
//  }
// }
</script>

<style lang="less" scoped>
.scollBy {
  width: 600px;
  height: 300px;
  overflow: hidden;
  outline: 2px solid red;
}
</style>
