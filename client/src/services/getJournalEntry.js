export default function getJournalEntry(wine_id) {
  return fetch(`/api/journal-entries/${wine_id}`).then(res =>
    res.ok ? res.json() : new Error(res.text())
  )
}
