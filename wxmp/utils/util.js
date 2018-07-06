/**
 * 星期中文映射
 */
const day = ['日', '一', '二', '三', '四', '五', '六']

/**
 * 数字字符串日期格式化
 * '20180617' -> '6月17日 星期日'
 * @param { String } date 数字字符串表示的日期
 * @return { String } 格式化后的日期
 */
function formatDate (date) {
  let d = new Date()
  d.setFullYear(Number.parseInt(date.substr(0, 4)))
  d.setMonth(Number.parseInt(date.substr(4, 2)) - 1)
  d.setDate(Number.parseInt(date.substr(6, 2)))
  return (d.getMonth() + 1) + '月' + d.getDate() + '日 星期' + day[d.getDay()]
}

module.exports = {
  formatDate: formatDate
}
