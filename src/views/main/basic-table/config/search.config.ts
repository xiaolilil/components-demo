import { IForm } from '@/types'

export const searchFormConfig: IForm = {
  labelWidth: '120px',
  itemStyle: {
    padding: '10px 40px',
  },
  // colLayout: {
  //   span: 8,
  //   xl: 6,
  //   lg: 8,
  //   md: 12,
  //   sm: 24,
  //   xs: 24,
  // },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '姓名',
      placeholder: '请输入姓名',
    },

    {
      field: 'date',
      type: 'input',
      label: '时间',
      placeholder: '请输入时间',
    },

    // {
    //   field: 'createAt',
    //   type: 'datepicker',
    //   label: '创建时间',
    //   otherOptions: {
    //     startPlaceholder: '开始时间',
    //     endPlaceholder: '结束时间',
    //     type: 'daterange',
    //   },
    // },
  ],
}
