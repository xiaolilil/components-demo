<template>
  <div class="form">
    <Form :data="formConfig">
      <template #footer>
        <div class="btns">
          <el-button type="primary">搜索</el-button>
          <el-button type="info">重置</el-button>
        </div>
      </template>
    </Form>
  </div>
</template>

<script lang="ts" setup>
import Form from '@/components/form/form.vue'
import { formConfig } from './config/form.config'
</script>

<style lang="less" scoped></style>
