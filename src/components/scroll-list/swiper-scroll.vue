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
        <table>
          <tbody>
            <tr>
              <td>{{ item.sn }}</td>
              <td class="title">{{ item.TI_place }}</td>
              <td>{{ item.TI_type }}</td>
              <td>{{ item.TI_info }}</td>
              <td class="time">{{ item.TI_UPTime }}</td>
              <td>{{ item.TI_state }}</td>
            </tr>
          </tbody>
        </table>
      </swiper-slide>
    </swiper>
  </div>
</template>
<!-- <li class="listItem type1">
  <a style="color: #000" :title="item.title">{{ item.title }}</a>
</li> -->
<script lang="ts" setup>
import { getCurrentInstance, onMounted, ref, reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'
import 'swiper/css'

const data = ref({
  list2: [
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
  ],
  modules: [Autoplay],
})
</script>

<style lang="less">
#swiperList2 {
  // width: 600px;
  tr {
    background-color: cadetblue;
  }
  td {
    width: 120px;
    float: left;
  }
  .time {
    width: 300px;
  }
}
</style>
