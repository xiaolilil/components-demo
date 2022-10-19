<template>
  <div class="dataListZone">
    <swiper
      id="swiperList2"
      v-if="data.list2"
      :slides-per-view="5"
      :autoplay="{ delay: 2000, disableOnInteraction: false }"
      :speed="500"
      :space-between="5"
      :direction="'vertical'"
      :scrollbar="{ draggable: false }"
      :loop="true"
      :modules="data.modules"
      style="height: 240px"
    >
      <swiper-slide v-for="(item, index) in data.list2" :key="index">
        <li class="listItem type1">
          <a style="color: #000" :title="item.title">{{ item.title }}</a>
        </li>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, onMounted, ref, reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'
import 'swiper/css'

const data = ref({
  list2: [
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
  ],
  modules: [Autoplay],
})
</script>
