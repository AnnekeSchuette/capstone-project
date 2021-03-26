export default function getDishPairing(wine_type = '') {
  const wineType = wine_type.replace(' ', '_')
  const config = {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  }

  return fetch(`/api/dish-pairing/${wineType}`, config)
    .then(async res => res.json())
    .then(data => data)
}
