export default function deleteJournalEntry(id) {
  return fetch(`/api/journal-entries/${id}`, {
    method: 'Delete',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => (data.error ? Promise.reject(data) : data))
}
