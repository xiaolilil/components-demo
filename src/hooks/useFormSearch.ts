import { ref } from 'vue'
// import
import Form from '@/components/form/form.vue'

export function useFormSearch(url?: string): any {
  const comFormRef = ref<InstanceType<typeof Form>>()
  // 重置
  const handleReset = () => {
    comFormRef.value.formRef.resetFields()
  }

  const handleQuery = (queryInfo: any) => {
    console.log('queryInfo', queryInfo)
    // console.log('comFormRef.value.formData', comFormRef.value.formData)
    // comFormRef.value.formData
  }

  return [comFormRef, handleReset, handleQuery]
}
