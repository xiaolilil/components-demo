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
    {
      label: '请选择地址',
      prop: 'address',
      type: 'cascader',
      width: '200px',
      placeholder: '请选择地址',
      options: [
        {
          value: 'guide',
          label: 'Guide',
          children: [
            {
              value: 'disciplines',
              label: 'Disciplines',
              children: [
                {
                  value: 'consistency',
                  label: 'Consistency',
                },
                {
                  value: 'feedback',
                  label: 'Feedback',
                },
                {
                  value: 'efficiency',
                  label: 'Efficiency',
                },
                {
                  value: 'controllability',
                  label: 'Controllability',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'side nav',
                  label: 'Side Navigation',
                },
                {
                  value: 'top nav',
                  label: 'Top Navigation',
                },
              ],
            },
          ],
        },
        {
          value: 'component',
          label: 'Component',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout',
                },
                {
                  value: 'color',
                  label: 'Color',
                },
                {
                  value: 'typography',
                  label: 'Typography',
                },
                {
                  value: 'icon',
                  label: 'Icon',
                },
                {
                  value: 'button',
                  label: 'Button',
                },
              ],
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio',
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox',
                },
                {
                  value: 'input',
                  label: 'Input',
                },
                {
                  value: 'input-number',
                  label: 'InputNumber',
                },
                {
                  value: 'select',
                  label: 'Select',
                },
                {
                  value: 'cascader',
                  label: 'Cascader',
                },
                {
                  value: 'switch',
                  label: 'Switch',
                },
                {
                  value: 'slider',
                  label: 'Slider',
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker',
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker',
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker',
                },
                {
                  value: 'upload',
                  label: 'Upload',
                },
                {
                  value: 'rate',
                  label: 'Rate',
                },
                {
                  value: 'form',
                  label: 'Form',
                },
              ],
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table',
                },
                {
                  value: 'tag',
                  label: 'Tag',
                },
                {
                  value: 'progress',
                  label: 'Progress',
                },
                {
                  value: 'tree',
                  label: 'Tree',
                },
                {
                  value: 'pagination',
                  label: 'Pagination',
                },
                {
                  value: 'badge',
                  label: 'Badge',
                },
              ],
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert',
                },
                {
                  value: 'loading',
                  label: 'Loading',
                },
                {
                  value: 'message',
                  label: 'Message',
                },
                {
                  value: 'message-box',
                  label: 'MessageBox',
                },
                {
                  value: 'notification',
                  label: 'Notification',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'Menu',
                },
                {
                  value: 'tabs',
                  label: 'Tabs',
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb',
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown',
                },
                {
                  value: 'steps',
                  label: 'Steps',
                },
              ],
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog',
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip',
                },
                {
                  value: 'popover',
                  label: 'Popover',
                },
                {
                  value: 'card',
                  label: 'Card',
                },
                {
                  value: 'carousel',
                  label: 'Carousel',
                },
                {
                  value: 'collapse',
                  label: 'Collapse',
                },
              ],
            },
          ],
        },
        {
          value: 'resource',
          label: 'Resource',
          children: [
            {
              value: 'axure',
              label: 'Axure Components',
            },
            {
              value: 'sketch',
              label: 'Sketch Templates',
            },
            {
              value: 'docs',
              label: 'Design Documentation',
            },
          ],
        },
      ],
    },
    {
      label: '日期',
      prop: 'date',
      type: 'date',
      width: '300px',
      placeholder: '请选择日期',
    },
    {
      label: '时间范围',
      prop: 'dobiletime',
      type: 'time',
      span: 12,
      placeholder: '请选择时间范围',
      isRange: true,
    },

    {
      label: '时间',
      prop: 'times',
      type: 'time',
      span: 12,
      placeholder: '请选择时间',
      isRange: false,
    },
    {
      label: '日期时间',
      prop: 'datetime',
      type: 'datetime',
      span: 12,
      placeholder: '请选择日期时间',
    },
  ],
}
