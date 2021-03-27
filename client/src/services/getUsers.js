export default function getUsers(id) {
  return fetch(`/api/users/${id}`).then(res => (res.ok ? res.json() : new Error(res.text())))
}
