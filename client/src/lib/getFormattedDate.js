export default function getFormattedDate(dateString) {
  var date = dateString
  var str =
    date.getFullYear() +
    '/' +
    (date.getMonth() + 1) +
    '/' +
    date.getDate() +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes()

  return str
}
