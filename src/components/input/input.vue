<template>
  <div class="input">
    <el-input placeholder="请输入内容" v-model="input" :id="search_id" />
    <el-button type="primary">搜索</el-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const search_id = ref('searchId')
const input = ref('')
</script>

<style lang="less" scoped>
.input {
  position: absolute;
  z-index: 10000;
}
.el-input {
  width: 500px;
}
</style>
