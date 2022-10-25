<template>
  <div class="table">
    <Form
      :data="formConfig"
      ref="comFormRef"
      @query-form="handleQuery"
      @reset-form="handleReset"
    >
      <!-- <template #footer>
        <div class="btns">
          <el-button type="info" @click="handleReset">重置</el-button>
          <el-button type="primary" @click="handleQuery">搜索</el-button>
        </div>
      </template> -->
    </Form>

    <basic-table
      :tableData="tableData"
      v-bind="tableConfig"
      @handleEdit="handleEditData"
    >
      <template #toolbarHandler>
        <el-button type="primary" @click="handleAddData">新建用户</el-button>
      </template>

      <!-- <template #name="scope">
        <span>{{ scope.row.name + 2 }}</span>
      </template> -->

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

  <Dialog
    ref="dialogRef"
    :default-info="defaultInfo"
    :title="title"
    :dialog-config="dialogConfig"
  >
  </Dialog>
</template>

<script lang="ts" setup>
import BaiscTable from '@/components/basic-table/basic-table.vue'
import Dialog from '@/components/dialog/dialog.vue'
import Form from '@/components/form/form.vue'

// 表格相关配置
import { tableConfig } from './config/content.config'
import { dialogConfig } from './config/dialog.config'
import { searchFormConfig } from './config/search.config'
import { formConfig } from './config/form.config'

import { useDialog } from '@/hooks/useDialog'
import { useFormSearch } from '@/hooks/useFormSearch'

import { reactive, ref } from 'vue'

// const formData = reactive({
//   labelWidth: '120px',
//   items: [
//     {
//       label: '测试',
//       prop: 'name',
//       type: 'input',
//       width: '200px',
//       placeholder: '请输入姓名',
//     },
//     {
//       label: '状态',
//       prop: 'state',
//       type: 'select',
//       width: '200px',
//       placeholder: '请选择状态',
//       options: [
//         { label: '在线', value: 'true' },
//         { label: '下线', value: 'false' },
//       ],
//     },
//     {
//       label: '开关',
//       prop: 'open',
//       type: 'switch',
//     },
//     {
//       label: '活动',
//       prop: 'activies',
//       type: 'checkbox',
//       placeholder: '请选择活动',
//       groups: [
//         { label: 'k歌', value: 'k歌' },
//         { label: '看电影', value: '看电影' },
//         { label: '打球', value: '打球' },
//       ],
//     },
//     {
//       label: '单选测试',
//       prop: 'singl',
//       type: 'radio',
//       groups: [
//         { label: '单选a', value: 'a' },
//         { label: '单选b', value: 'b' },
//       ],
//     },
//     {
//       label: '文本域描述',
//       prop: 'desc',
//       type: 'textarea',
//       width: '300px',
//       placeholder: '请填写描述',
//     },
//     {
//       label: '日期',
//       prop: 'date',
//       type: 'date',
//       width: '300px',
//       placeholder: '请选择日期',
//     },
//     {
//       label: '时间范围',
//       prop: 'dobiletime',
//       type: 'time',
//       span: 12,
//       placeholder: '请选择时间范围',
//     },
//     {
//       label: '时间',
//       prop: 'time',
//       type: 'time',
//       span: 12,
//       placeholder: '请选择时间',
//     },
//     {
//       label: '日期时间',
//       prop: 'datetime',
//       type: 'datetime',
//       span: 12,
//       placeholder: '请选择日期时间',
//     },
//   ],
// })

// 表格数据
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-12-02',
    name: 'Tom1',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom2',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2020-05-01',
    name: 'Tom3',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const { title, defaultInfo, dialogRef, handleAddData, handleEditData } =
  useDialog('用户')

const [comFormRef, handleReset, handleQuery] = useFormSearch()

const handDelete = (obj: object) => {
  console.log('obj', obj)
}
</script>

<style lang="less" scoped>
.btns {
}
</style>
