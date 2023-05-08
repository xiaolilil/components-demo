<template>
  <div class="table" ref="tb">
    <button @click="scrollFn">滚动到底部</button>
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

    <hr />

    <div class="xls">
      <span>导入</span>
      <input
        type="file"
        accept=".xls,.xlsx"
        class="upload-file"
        ref="uploadImgBtn"
        @change="Excel($event)"
      />
    </div>

    <hr />

    <basic-table
      :tableData="tableData"
      v-bind="tableConfig"
      @handleEdit="handleEditData"
      class="table"
      id="testTable"
    >
      <template #toolbarHandler>
        <el-button type="primary" @click="handleAddData">新建用户</el-button>
        <el-button type="warning" @click="handExport">导出表格</el-button>
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

    <br />
    <br />
    <br />
    <br />
    <div id="box" class="bg-amber-300">测试底部</div>
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

import { reactive, ref, nextTick, defineExpose } from 'vue'
import usePinia from '@/store'
import { scrollTo } from '@/utils/tools'
// import { exportExcel } from '@/utils/exportData'
import { exportExcel } from '@/utils/exportExcel'
import * as XLSX from 'xlsx'
import XLSXS from 'xlsx-style'
import FileSaver from 'file-saver'

import { ElMessageBox } from 'element-plus'
import 'element-plus/theme-chalk/el-message-box.css'
const { test } = usePinia()
const tb = ref<HTMLElement>()

let tableData: any[] = [
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

let titleList = [
  {
    label: '时间',
    prop: 'date',
    width: '200%',
  },
  {
    label: '姓名',
    prop: 'name',
    width: '15%',
  },
  {
    label: '地址',
    prop: 'address',
    width: '240%',
  },
]

// 导出
const handExport = () => {
  ElMessageBox.confirm('是否确认导出全部数据?', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(() => {
    const allTable = [
      {
        eleName: '#testTable', //要导出的表格id
        title: '测试导出表格', //sheet页名称
      },
      // {
      //   eleName: '#trial',
      //   title: '試算平衡表',
      // },
    ]
    exportExcel(allTable, '测试导出表格')
  })
  // exportExcel(titleList, tableData, '测试导出列表', '')
}

// 导入
const Excel = (w: any) => {
  const files = w.target.files
  if (files.length <= 0) {
    return false
  } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
    return false
  }
  // 读取表格
  const fileReader = new FileReader()
  fileReader.onload = (ev: any) => {
    const workbook = XLSX.read(ev.target.result, {
      type: 'binary',
    })
    const wsname = workbook.SheetNames[0]
    const xl = XLSX.utils.sheet_to_json(workbook.Sheets[wsname])
    // dealExcel(xl) //...对数据进行自己需要的操作
    // tableData.value = xl
    // tableData = [...tableData, ...xl]
    // console.log('xl', xl)
    tableData = [...tableData, ...transitionExcel(xl)]
    console.log('tableData', tableData)
  }
  fileReader.readAsBinaryString(files[0])
}

function transitionExcel(xl: any) {
  let keymap = {
    // 根据所要导入的文件转换开头
    时间: 'date',
    姓名: 'name',
    地址: 'address',
  }
  const zhKey = Object.keys(xl[0])
  // console.log('zhKey', zhKey) // ['#', '时间', '姓名', '地址', '操作']

  return xl.map((v: any) => {
    const obj = {}
    zhKey.forEach((i: any) => {
      const enkey = keymap[i]
      if (enkey) obj[enkey] = v[i]
    })

    return obj
  })
}

const distance = ref<number>()
const scrollFn = () => {
  // scrollTo('box')

  nextTick(() => {
    ;(distance.value =
      document.querySelector('#box')!.getBoundingClientRect().top +
      window.scrollY -
      100),
      test.setScrollTo(distance.value)
    window.scrollTo({ top: 300 })
    if (tb.value) {
      tb.value.scrollTop = 300
    }
  })
}

defineExpose({
  scrollFn,
})

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

const { title, defaultInfo, dialogRef, handleAddData, handleEditData } =
  useDialog('用户')

const [comFormRef, handleReset, handleQuery] = useFormSearch()

const handDelete = (obj: object) => {
  console.log('obj', obj)
}
</script>

<style lang="less" scoped>
.table {
  height: auto;
  overflow: auto;
}
</style>
