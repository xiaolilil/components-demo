import FileSaver from 'file-saver'
import * as XLSX from 'xlsx' //这是vue3导入XLSX的方法
import XLSXS from 'xlsx-js-style'

// 導出Excel文件的方法
export function exportExcel(allTable: any[], excelName: string) {
  const xlsxParam = { raw: true } // 导出的内容只做解析，不进行格式转换 如果不设置该属性80%可能导出的是0.8 可自行测试

  let wb = XLSX.utils.book_new()
  // 循环添加每一个表格/sheet (如果是只有一个sheet页的话就不需要循环，直接添加进去就可以了)
  for (const item of allTable) {
    // console.log('item', item)
    let sheet = XLSX.utils.table_to_sheet(
      document.querySelector(item.eleName),
      xlsxParam,
    )

    let row = [
      {
        v: '#',
        t: 's',
        s: { font: { bold: true, sz: 24, alignment: 'center' } },
      },
      {
        v: '1',
        t: 's',
        s: { font: { bold: true, sz: 24, alignment: 'center' } },
      },
      {
        v: '2',
        t: 's',
        s: { font: { bold: true, sz: 24, alignment: 'center' } },
      },
      {
        v: '3',
        t: 's',
        s: { font: { bold: true, sz: 24, alignment: 'center' } },
      },
      {
        v: '4',
        t: 's',
        s: { font: { bold: true, sz: 24, alignment: 'center' } },
      },
    ]
    const ws = XLSX.utils.aoa_to_sheet([row])
    console.log('sheet', sheet)
    XLSX.utils.book_append_sheet(wb, sheet, item.title)
  }
  //console.log(wb) //打印查看wb的结构 看下图

  // 循环找到对应的单元格修改样式
  for (const key in wb.Sheets) {
    if (key == '测试导出表格') {
      console.log('k', wb.Sheets[key])
      for (const k in wb.Sheets[key]) {
        // 非!开头的属性都是单元格
        if (!k.startsWith('!')) {
          let td = wb.Sheets[key][k]

          //td每一个是单元格对象 v：单元格内容 t：单元格内容类型如string s：单元格样式

          // console.log('td', td)
          // if (td.v == '删除编辑') {
          // td = td.filter((v: any) => v.v != '删除编辑')
          // }
          if (!td.v.includes('(')) {
            // 設置字體顔色 帶括號的數字比如(1,000.00)改成紅色
            td.s = {
              font: {
                color: { rgb: 'ff0000' },
                // name: '仿宋',
                // sz: 30,
                // bold: true,
              },
              alignment: {
                vertical: 'center',
                horizontal: 'center',
                wrapText: true,
              },
              // border: {
              // top: {
              // style: 'thin',
              // color: { rgb: '000000' }
              // }
              // }
            }
          }
        }
      }
    }
  }

  const wbout = XLSXS.write(wb, {
    bookType: 'xlsx',
    bookSST: true,
    type: 'array',
  })
  try {
    FileSaver.saveAs(
      new Blob([wbout], { type: 'application/octet-stream' }),
      `${excelName}.xlsx`,
    )
  } catch (e) {
    if (typeof console !== 'undefined') {
      console.log(e, wbout)
    }
  }
  return wbout
}
