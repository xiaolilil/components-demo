<template>
  <div class="map">
    <Input></Input>
    <gd-map></gd-map>
  </div>
</template>

<script lang="ts" setup>
import GdMap from '@/components/map/map.vue'
import Input from '@/components/input/input.vue'
</script>

<style lang="less" scoped>
.map {
  position: relative;
}
</style>
