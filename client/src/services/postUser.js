export default function postUser(name) {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ name }),
  })
    .then(res => res.json())
    .then(data => (data.error ? Promise.reject(data) : data))
}
