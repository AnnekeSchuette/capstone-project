export default function editJournalEntry(id, rating, notes) {
  return fetch(`/api/journal-entries/${id}/edit`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ rating, notes }),
  })
    .then(res => res.json())
    .then(data => (data.error ? Promise.reject(data) : data))
}
