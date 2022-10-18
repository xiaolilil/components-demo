import { ref } from 'vue'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  // 重置
  const handleReset = () => {
    // 调用 子组件的方法
    pageContentRef.value?.getPageData()
  }

  const handleQuery = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }

  return [pageContentRef, handleReset, handleQuery]
}
