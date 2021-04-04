export default function getJournalEntry(wineId) {
  return fetch(`/api/journal-entries/${wineId}`).then(res =>
    res.ok ? res.json() : new Error(res.text())
  )
}
