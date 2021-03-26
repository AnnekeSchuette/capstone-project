export default function editJournalEntry(id) {
  return fetch(`/api/journal-entries/${id}/edit`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => (data.error ? Promise.reject(data) : data))
}
