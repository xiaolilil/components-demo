<template>
  <div class="form">
    <qrcode-vue :value="data.payUrl" :size="data.size" level="H" />
    <Form :data="formConfig">
      <template #footer>
        <div class="btns blue-400 text-sm bg-red-300">
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
import { ref, reactive,computed } from 'vue'
import QrcodeVue from 'qrcode.vue'

const data = reactive<{
  payUrl: string
  size: number
}>({
  payUrl: '千万别搭理s---b',
  size: 256,
})

let arr1 = ref<any>([
  { name: 1 },
  { name: 1 },
  { name: 1 },
  { name: 1 },
  { name: 1 },
  { name: 1 },
  { name: 1 },
])

let arr2 = ref<any>([
  { value: 2 },
  { value: 2 },
  { value: 2 },
  { value: 2 },
  { value: 2 },
  { value: 2 },
])

const arr = [
  {num:1},
  {num:5},
  {num:3},
  {num:7},
  {num:0},
]

const cp = computed(() => {
  return arr.sort((a,b) => b.num -a.num).slice(0,6)
})
console.log('cp.value',cp.value)
</script>

<style lang="less" scoped></style>
