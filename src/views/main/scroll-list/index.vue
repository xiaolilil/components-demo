<template>
  <div class="list">
    <swiper-scroll></swiper-scroll>
  </div>
</template>

<script lang="ts" setup>
// import ScrollList from '@/components/scroll-list/scroll-list.vue'
// import ScrollList from '@/components/scroll-list/demo2.vue'
// import NpmScroll from '@/components/scroll-list/npm-scroll.vue'
import SwiperScroll from '@/components/scroll-list/swiper-scroll.vue'

import { ref } from 'vue'

const riskList = ref<any>([
  {
    grand: '1',
    title: '网站 ICP8 备案已过1，需尽快更新网站备案已66...',
    time: '2022/04/13',
  },
  {
    grand: '2',
    title: '网站 ICP7 备案已过期，需尽快更新网站备案已55...',
    time: '2022/04/13',
  },
  {
    grand: '3',
    title: '网站 ICP6 备案已过1，需尽快更新网站备案已44...',
    time: '2022/11/13',
  },
  {
    grand: '4',
    title: '网站 ICP45 备案已过期，需尽快更新网站备案已33...',
    time: '2022/12/13',
  },
  {
    grand: '5',
    title: '网站 ICP3 备案已过1，需尽快更新网站备案已11...',
    time: '2022/13/13',
  },
  {
    grand: '6',
    title: '网站 ICP2 备案已过期，需尽快更新网站备案已22...',
    time: '2022/14/13',
  },
])
</script>
