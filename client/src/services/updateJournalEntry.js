export default function updateJournalEntry(_id, wineId, rating, notes) {
  const config = {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    upsert: true,
    body: JSON.stringify({ wineId, rating, notes }),
  }
  return fetch(`/api/journal-entries/${{ _id }}`, config).then(res =>
    res.ok ? res.json() : new Error(res.text())
  )
}
