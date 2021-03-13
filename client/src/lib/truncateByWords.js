export default function truncateByWords(str, words) {
  const strLength = str.split(' ').length
  const indicateTrunc = strLength > words ? ' (...)' : ''
  return str.split(' ').splice(0, words).join(' ') + indicateTrunc
}
