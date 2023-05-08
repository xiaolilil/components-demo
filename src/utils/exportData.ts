import * as XLSX from 'xlsx'

/**
 * 导出 Excel 表格
 * @param {*} title 表头信息
 * @param {*} data 表格体内容
 * @param {*} outFileName 保存的文件名
 * @param {*} orderProp 序号列的字段名
 */
export function exportExcel(
  title: any,
  data: any,
  outFileName: any,
  orderProp: any,
) {
  let prop = 'prop'
  let titleList = toolTitleList(title)
  let tableData = [
    [...titleList], //导出表头
  ] // 表格表头

  data.forEach((tableItem: any, tableIndex: number) => {
    let rowData: any[] = []
    title.forEach((titleItem: any) => {
      if (titleItem[prop] === orderProp) {
        rowData.push(tableIndex + 1)
      } else {
        rowData.push(tableItem[titleItem[prop]])
      }
    })
    tableData.push(rowData)
  })

  // 以下部分才是生成 Excel 的重点
  let aoaToSheet = XLSX.utils.aoa_to_sheet(tableData)
  let bookNew = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(bookNew, aoaToSheet, outFileName) // 工作簿名称
  XLSX.writeFile(bookNew, outFileName + '.xlsx') // 保存的文件名
}
/**
 * 获取表头信息
 * @param {*} data 传入的表头信息数组
 * @returns
 */
function toolTitleList(data: any) {
  let result: any[] = []
  data.forEach((item: any) => {
    result.push(item['label'])
  })
  return result
}
