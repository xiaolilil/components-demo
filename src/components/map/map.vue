<template>
  <div class="map" id="container"></div>
</template>

<script lang="ts" setup>
import AMapLoader from '@amap/amap-jsapi-loader'
import { ref, reactive } from 'vue'
import usePinia from '@/store'

const { test } = usePinia()

const _AMapSecurityConfig = {
  securityJsCode: '41bac2f89ebfa6afc8cd605b746fac19',
}

const map = ref<any>(null)

const autoOptions = reactive({
  input: '',
})
const auto = ref<any>(null)
autoOptions.input = test.input

const initMap = () => {
  AMapLoader.load({
    key: '41bac2f89ebfa6afc8cd605b746fac19', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [
      'AMap.ToolBar',
      'AMap.Scale',
      'AMap.HawkEye',
      'AMap.MapType',
      'AMap.Geolocation',
    ], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      map.value = new AMap.Map('container', {
        resizeEnable: true,
        //设置地图容器id
        viewMode: '3D', //是否为3D地图模式
        zoom: 10, //初始化地图级别
        center: [105.602725, 37.076636], //初始化地图中心点位置
      })
      map.value.addControl(new AMap.Scale())
      map.value.addControl(new AMap.ToolBar())
      map.value.addControl(new AMap.HawkEye())
      map.value.addControl(new AMap.MapType())
      map.value.addControl(new AMap.Geolocation())
      auto.value = new AMap.AutoComplete(autoOptions)
    })
    .catch((e) => {
      console.log(e)
    })
}
initMap()
</script>

<style lang="less" scoped>
#container {
  width: 100%;
  height: 86vh;
}
</style>
