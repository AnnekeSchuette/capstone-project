export default function postJournalEntry(entry) {
  return fetch('/api/journal-entries', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(entry),
  })
    .then(res => (res.ok ? res.json() : new Error(res.text())))
    .then(data => (data.error ? Promise.reject(data) : data))
}
