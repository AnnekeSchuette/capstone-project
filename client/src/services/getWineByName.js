export default function getWinebyName(title) {
  return fetch(`/api/stored-wines/title/${title}`).then(res =>
    res.ok ? res.json() : new Error(res.text())
  )
}
