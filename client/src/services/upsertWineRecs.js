export default function upsertDishPairing(data) {
  const config = {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    upsert: true,
    body: JSON.stringify(data),
  }

  return fetch(`/api/stored-wines/${data.id}`, config).then(async res => {
    if (res.ok) {
      return await res.json()
    } else {
      const errorMessage = await res.text()
      return Promise.reject(new Error(errorMessage))
    }
  })
}
