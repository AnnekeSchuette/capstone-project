export default function upsertDishPairing(data) {
  const config = {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    upsert: true,
    body: JSON.stringify(data),
  }

  return fetch(`/api/stored-wines/${data.id}`, config).then(res =>
    res.ok ? res.json() : new Error(res.text())
  )
}
