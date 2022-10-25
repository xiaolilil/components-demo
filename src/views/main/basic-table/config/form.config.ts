import { ISearchForm } from '@/types'
export const formConfig: ISearchForm = {
  labelWidth: '120px',
  items: [
    {
      label: '测试',
      prop: 'name',
      type: 'input',
      width: '200px',
      placeholder: '请输入姓名',
      default: '',
    },
    {
      label: '手机号',
      prop: 'mobile',
      type: 'input',
      width: '200px',
      placeholder: '请输入手机号',
      default: '',
    },
    {
      label: '状态',
      prop: 'state',
      type: 'select',
      width: '200px',
      placeholder: '请选择状态',
      options: [
        { label: '在线', value: 'true' },
        { label: '下线', value: 'false' },
      ],
      default: '',
    },
    {
      label: '开关',
      prop: 'open',
      type: 'switch',
      default: false,
    },
    {
      label: '活动',
      prop: 'activies',
      type: 'checkbox',
      placeholder: '请选择活动',
      groups: [
        { label: 'k歌', value: 'k歌' },
        { label: '看电影', value: '看电影' },
        { label: '打球', value: '打球' },
      ],
      default: [],
    },
    {
      label: '单选测试',
      prop: 'singl',
      type: 'radio',
      groups: [
        { label: '单选a', value: 'a' },
        { label: '单选b', value: 'b' },
      ],
      default: '',
    },
    {
      label: '文本域描述',
      prop: 'desc',
      type: 'textarea',
      width: '300px',
      placeholder: '请填写描述',
      default: '',
    },
  ],
  btns: [
    {
      label: '搜索',
      type: 'primary',
      event: 'submit',
      cbFn: (data?: any) => {
        console.log('data', data)
      },
    },
    {
      label: '重置',
      type: 'info',
      event: 'reset',
      cbFn: () => {
        console.log('reset')
      },
    },
  ],
}
