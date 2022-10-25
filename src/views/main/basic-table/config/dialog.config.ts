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
      prop: 'address',
      type: 'input',
      label: '地址',
      placeholder: '请输入地址',
    },
  ],
}
