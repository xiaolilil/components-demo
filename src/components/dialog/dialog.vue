<template>
  <div class="dialog">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="35%"
      center
      destroy-on-close
    >
      <!-- v-model="dialogData" -->
      <Form
        ref="comFormRef"
        :default-info="dialogData"
        :data="dialogConfig"
      ></Form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfim">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import Form from '@/components/form/form.vue'
import { ISearchForm } from '@/types'
import { useFormSearch } from '@/hooks/useFormSearch'

const props = withDefaults(
  defineProps<{
    title: string
    dialogConfig: ISearchForm
    defaultInfo?: any
  }>(),
  {},
)

const [comFormRef, handleReset, handleQuery] = useFormSearch()

const dialogVisible = ref(false)
const dialogData = ref<any>({})

watch(
  () => props.defaultInfo,
  (n) => {
    for (const item of props.dialogConfig.items) {
      dialogData.value[`${item.prop}`] = n[`${item.prop}`]
    }
    console.log('dialogData.value', dialogData.value)
  },
)

// const emits = defineEmits(['updateDialog'])

const handleConfim = () => {
  dialogVisible.value = false
  // comFormRef.value.formData
  // console.log('comFormRef.value.formData', comFormRef.value.formData)
  // 区分是新建点击的确定还是编辑点击的确定
  // if (Object.keys(props.defaultInfo).length) {
  // 有值是编辑
  // system.editPageData({
  //   pageName: props.pageName,
  //   editData: { ...dialogData.value, ...props.otherInfo },
  //   id: props.defaultInfo.id,
  // })
  // } else {
  // 没有值是新建
  // system.createPageData({
  //   pageName: props.pageName,
  //   newData: { ...dialogData.value, ...props.otherInfo },
  // })
  // }
}

defineExpose({ dialogVisible })
</script>

<style lang="less" scoped></style>
