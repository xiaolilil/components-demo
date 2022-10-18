import { IForm } from '@/types'

export const dialogConfig: IForm = {
  formItems: [
    {
      field: 'name',
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
  colLayout: {
    span: 24,
  },
  itemStyle: {},
}
