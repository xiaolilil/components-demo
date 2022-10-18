export const tableConfig = {
  title: '用户列表',
  // 序号
  showIndexColumn: true,
  // 单选 多选
  showSelectColumn: true,
  propsList: [
    {
      prop: 'date',
      label: '时间',
      minWidth: '200',
      slotName: 'date',
    },
    {
      prop: 'name',
      label: '姓名',
      minWidth: '100',
      slotName: 'name',
    },

    {
      prop: 'address',
      label: '地址',
      minWidth: '200',
      slotName: 'address',
    },
    {
      label: '操作',
      minWidth: '180',
      slotName: 'handler',
    },
  ],
}
