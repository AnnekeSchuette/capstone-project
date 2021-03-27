export default function upsertDishPairing(wine_type, text, pairings) {
  const wineTypeEncoded = wine_type.replace(' ', '_')
  const config = {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    upsert: true,
    body: JSON.stringify({ wine_type, text, pairings }),
  }

  return fetch(`/api/dish-pairing/${wineTypeEncoded}`, config).then(res =>
    res.ok ? res.json() : new Error(res.text())
  )
}
