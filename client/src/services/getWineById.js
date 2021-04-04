export default function getWinebyId(wineId) {
  return fetch(`/api/stored-wines/${wineId}`).then(res =>
    res.ok ? res.json() : new Error(res.text())
  )
}
