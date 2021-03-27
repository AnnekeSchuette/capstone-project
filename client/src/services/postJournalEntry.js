export default function postJournalEntry(wine_id, rating, notes) {
  return fetch('/api/journal-entries', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ wine_id, rating, notes }),
  })
    .then(res => (res.ok ? res.json() : new Error(res.text())))
    .then(data => (data.error ? Promise.reject(data) : data))
}
