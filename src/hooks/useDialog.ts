import { ref } from 'vue'
import Dialog from '@/components/dialog/dialog.vue'

type CallbackFn = (item?: any) => void

export function useDialog(
  name: string,
  addCb?: CallbackFn,
  editCb?: CallbackFn,
) {
  const title = ref('')
  const defaultInfo = ref({})

  const dialogRef = ref<InstanceType<typeof Dialog>>()

  const handleAddData = () => {
    title.value = `新建${name}`
    defaultInfo.value = {}
    if (dialogRef.value) {
      console.log('dialogRef.value', dialogRef.value)
      dialogRef.value.dialogVisible = true
    }
    // 有值的时候再进行调用
    addCb && addCb()
  }

  const handleEditData = (item: any) => {
    console.log('item', item)
    title.value = `编辑${name}`
    defaultInfo.value = { ...item }
    if (dialogRef.value) {
      dialogRef.value.dialogVisible = true
    }
    editCb && editCb(item)
  }

  return {
    title,
    defaultInfo,
    dialogRef,
    handleAddData,
    handleEditData,
  }
}
