export default function getUsers(id) {
  return fetch(`/api/users/${id}`).then(res => res.json())
}
