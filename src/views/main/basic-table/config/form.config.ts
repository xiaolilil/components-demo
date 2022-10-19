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
    },
    {
      label: '手机号',
      prop: 'mobile',
      type: 'input',
      width: '200px',
      placeholder: '请输入手机号',
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
    },
    {
      label: '开关',
      prop: 'open',
      type: 'switch',
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
    },
    {
      label: '单选测试',
      prop: 'singl',
      type: 'radio',
      groups: [
        { label: '单选a', value: 'a' },
        { label: '单选b', value: 'b' },
      ],
    },
    {
      label: '文本域描述',
      prop: 'desc',
      type: 'textarea',
      width: '300px',
      placeholder: '请填写描述',
    },
  ],
}
