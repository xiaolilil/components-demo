type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IDateType {
  dataCount: number[]
  currYear: number
  currMonth: number
  currDay: number
  signInList: any[]
}

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对 select
  options?: any[]
  // 针对 datepicker
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}

export interface ISearchForm {
  labelWidth?: string
  items: any[]
}
