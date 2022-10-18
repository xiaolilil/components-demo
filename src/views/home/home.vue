<template>
  <div class="home">
    <nav-top></nav-top>
    <div class="main">
      <Menu></Menu>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NavTop, Menu } from '@/layout'
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
  }
}
</style>
