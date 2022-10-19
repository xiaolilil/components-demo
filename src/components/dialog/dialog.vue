<template>
  <div class="dialog">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="35%"
      center
      destroy-on-close
    >
      sadasdsadsadsa
      <!-- <search-form
        v-bind="dialogConfig"
        v-model="dialogData"
        :form-width="formWidth"
      ></search-form> -->
      <Form :data="dialogConfig"></Form>
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
import { ref } from 'vue'
import Form from '@/components/form/form.vue'
import { ISearchForm } from '@/types'
const props = withDefaults(
  defineProps<{
    title: string
    dialogConfig: ISearchForm
    defaultInfo?: any
  }>(),
  {},
)

const dialogVisible = ref(false)
// const emits = defineEmits(['updateDialog'])

const handleConfim = () => {
  dialogVisible.value = false
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
