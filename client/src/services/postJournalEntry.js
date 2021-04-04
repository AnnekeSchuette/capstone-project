export default function postJournalEntry(wineId, wine, user, rating, notes) {
  return fetch('/api/journal-entries/:wineId', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(wineId, wine, user, rating, notes),
  })
    .then(res => (res.ok ? res.json() : new Error(res.text())))
    .catch(error => error)
}
