<template>
  <div class="list">
    <!-- <swiper-scroll></swiper-scroll> -->
    <!-- <Test1></Test1> -->
    <!-- <scroll-css></scroll-css> -->
    <scroll-table :data="data" />
  </div>
</template>

<script lang="ts" setup>
import ScrollTable from '@/components/scroll-list/scroll-table.vue'
// import SwiperScroll from '@/components/scroll-list/swiper-scroll.vue'
// import ScrollCss from '@/components/scroll-list/scroll-css.vue'
// import Test1 from '@/components/scroll-list/test1.vue

import { ref, reactive } from 'vue'

const data = reactive([
  {
    sn: '01',
    TI_place: 'A部件',
    TI_type: '50%',
    TI_info: '50°',
    TI_UPTime: '2021-10-01 09:23:42',
    TI_state: '未处理',
  },
  {
    sn: '02',
    TI_place: 'b部件',
    TI_type: '60%',
    TI_info: '70°',
    TI_UPTime: '2021-10-01 09:23:42',
    TI_state: '未处理',
  },
  {
    sn: '03',
    TI_place: 'c部件',
    TI_type: '70%',
    TI_info: '550°',
    TI_UPTime: '2021-10-01 09:23:42',
    TI_state: '未处理',
  },
  {
    sn: '04',
    TI_place: 'd部件',
    TI_type: '80%',
    TI_info: '40°',
    TI_UPTime: '2021-10-01 09:23:42',
    TI_state: '未处理',
  },
  {
    sn: '05',
    TI_place: 'e部件',
    TI_type: '90%',
    TI_info: '60°',
    TI_UPTime: '2021-10-01 09:23:42',
    TI_state: '未处理',
  },
  {
    sn: '06',
    TI_place: 'f部件',
    TI_type: '60%',
    TI_info: '67°',
    TI_UPTime: '2021-10-01 09:23:42',
    TI_state: '未处理',
  },
])

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
