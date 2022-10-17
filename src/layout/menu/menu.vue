<template>
  <div class="menu">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      active-text-color="#0a60bd"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      background-color="#000"
      text-color="#fff"
    >
      <el-menu-item index="1">
        <el-icon><setting /></el-icon>
        <template #title>日历签到</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.menu {
  width: 200px;
  height: 100%;
  background: #000;
  overflow-y: auto;
}
.el-menu-item {
  // background: #f8f8f8;
}
</style>
