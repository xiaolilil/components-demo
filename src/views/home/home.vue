<template>
  <div class="home">
    <nav-top></nav-top>
    <div class="main">
      <Menu></Menu>
      <div class="content" ref="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NavTop, Menu } from '@/layout'
import { scrollTo } from '@/utils/tools'
import { watch, nextTick, ref } from 'vue'
import usePinia from '@/store'
const { test } = usePinia()
const content = ref<HTMLElement>()

watch(
  () => test.isHavaScroll,
  (n) => {
    // @ts-ignore
    document.querySelector('.content').scrollTop = test.scrollTo
    test.setFlag(false)
  },
)
</script>

<style lang="less" scoped>
.home {
  height: 100%;
}
.main {
  display: flex;
  height: calc(100% - 60px);
  .content {
    flex: 1;
    background: #f9f9f9;
    padding: 20px;
    // height: auto;
    overflow-y: auto;
    scroll-behavior: smooth;
  }
}
</style>
