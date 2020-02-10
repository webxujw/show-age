
function getDays (year) {
  let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
    days[1] = 29
  }
  return days
}
module.exports = function (birthday, options = {}) {
  options = JSON.parse(JSON.stringify(options))
  let now = options.now || Date.now();
  let defaultVal = options.defaultVal || '--'
  let IntegerAge = options.IntegerAge || 5
  options.i18n = options.i18n || {}
  i18n = Object.assign({
    year: '岁',
    month:'月',
    days: '天',
    hour:'小时'
  },options.i18n)
    
  if (isNaN(new Date(birthday).valueOf()) || isNaN(new Date(now).valueOf())) return defaultVal
  let currentDate = new Date(now)
  let birthdayDate = new Date(birthday)
  if (currentDate.valueOf() - birthdayDate.valueOf() < 0) return defaultVal
  let obj = {}
  let current = {
    hour: currentDate.getHours(),
    date: currentDate.getDate(),
    month: currentDate.getMonth(),
    year: currentDate.getFullYear()
  }
  let birth = {
    hour: birthdayDate.getHours(),
    date: birthdayDate.getDate(),
    month: birthdayDate.getMonth(),
    year: birthdayDate.getFullYear()
  }
  if (current.hour - birth.hour >= 0) {
    obj.hour = current.hour - birth.hour
  } else {
    obj.hour = current.hour - birth.hour + 24
    current.date--
  }
  if (current.date - birth.date >= 0) {
    obj.date = current.date - birth.date
  } else {
    let days = getDays(birth.year)
    obj.date = days[current.month - 1] + current.date - birth.date
    current.month--
  }
  if (current.month - birth.month >= 0) {
    obj.month = current.month - birth.month
  } else {
    obj.month = current.month - birth.month + 12
    current.year--
  }
  obj.year = current.year - birth.year
  let str = ''
  if (obj.year > IntegerAge) {
    return obj.year + i18n.year
  } else if (obj.year !== 0) {
    str = obj.year + i18n.year
  }
    if (obj.month > 0 ) str += obj.month + i18n.month 
    if (obj.date > 0 ) str += obj.date + i18n.days
    if (obj.year === 0 && obj.month === 0 && obj.date === 0 && obj.hour !== 0) {
      str += obj.hour + i18n.hour
    }
    if (!str) str = '1' + i18n.hour
    return str
}
