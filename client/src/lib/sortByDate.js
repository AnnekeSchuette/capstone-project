export function sortByDateAsc(array) {
  array.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt)
  })
}

export function sortByDateDesc(array) {
  array.sort((a, b) => {
    return new Date(a.createdAt) - new Date(b.createdAt)
  })
}
