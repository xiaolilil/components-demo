<template>
  <div class="table">
    <Form :form-items="[]">
      <template #footer>
        <div class="btns">
          <el-button type="info">重置</el-button>
          <el-button type="primary">搜索</el-button>
        </div>
      </template>
    </Form>

    <basic-table
      :tableData="tableData"
      v-bind="tableConfig"
      @handleEdit="handleEditData"
    >
      <template #toolbarHandler>
        <el-button type="primary" @click="handleAddData">新建用户</el-button>
      </template>

      <template #name="scope">
        <span>{{ scope.row.name + 2 }}</span>
      </template>

      <template #handler="scope">
        <el-button type="danger" size="small" @click="handDelete(scope.row)"
          >删除</el-button
        >
        <el-button
          type="primary"
          size="small"
          @click="handleEditData(scope.row)"
          >编辑</el-button
        >
      </template>
    </basic-table>
  </div>

  <Dialog ref="dialogRef" :title="title" :dialog-config="dialogConfig"></Dialog>
</template>

<script lang="ts" setup>
import BaiscTable from '@/components/basic-table/basic-table.vue'
import Dialog from '@/components/dialog/dialog.vue'
import Form from '@/components/form/form.vue'

// 表格相关配置
import { tableConfig } from './config/content.config'
import { dialogConfig } from './config/dialog.config'

import { useDialog } from '@/hooks/useDialog'

// 表格数据
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const { title, defaultInfo, dialogRef, handleAddData, handleEditData } =
  useDialog('用户')

const handDelete = (obj: object) => {
  console.log('obj', obj)
}
</script>

<style lang="less" scoped>
.btns {
}
</style>
