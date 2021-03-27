export default function getWinebyId(id) {
  return fetch(`/api/stored-wines/${id}`).then(res => (res.ok ? res.json() : new Error(res.text())))
}
