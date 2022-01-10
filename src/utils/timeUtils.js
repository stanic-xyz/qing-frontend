const getWeekDate = () => {
  var now = new Date()
  var day = now.getDay()
  var weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return weeks[day]
}

export default {
  getWeekDate
}
