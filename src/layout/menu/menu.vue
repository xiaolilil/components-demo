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
        <span @click="changeView('calendar')">日历签到</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span @click="changeView('basic-table')">基础表格</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const router = useRouter()
const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const changeView = (path: string) => {
  router.push('/home/' + path)
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
