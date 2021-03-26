export default function postDishPairing(wine_type, text, pairings) {
  const config = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ wine_type: wine_type, text, pairings }),
  }

  return fetch(`/api/dish-pairing/${wine_type}`, config).then(async res => {
    if (res.ok) {
      return await res.json()
    } else {
      const errorMessage = await res.text()
      return Promise.reject(new Error(errorMessage))
    }
  })
}
