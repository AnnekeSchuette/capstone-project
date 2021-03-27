export default function getWinebyId(id) {
  return fetch(`/api/stored-wines/${id}`).then(res => res.json())
}
