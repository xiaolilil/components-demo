import { ISearchForm } from '@/types'

export const dialogConfig: ISearchForm = {
  labelWidth: '120px',
  items: [
    {
      prop: 'name',
      type: 'input',
      label: '姓名',
      placeholder: '请输入姓名',
    },
    {
      field: 'mobile',
      type: 'input',
      label: '手机号',
      placeholder: '请输入手机号',
    },
  ],
}
