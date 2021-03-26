import upsertDishPairing from './upsertDishPairing'

export default function getDishPairingApi(wine_type) {
  const wineTypeEncoded = wine_type.replace(' ', '_')
  const { REACT_APP_API_SPOONACULAR_KEY2 } = process.env
  const { REACT_APP_API_SPOONACULAR_BASEURL } = process.env

  const FETCH_URL = `${REACT_APP_API_SPOONACULAR_BASEURL}/food/wine/dishes?apiKey=${REACT_APP_API_SPOONACULAR_KEY2}&wine=${wineTypeEncoded}`

  return fetch(FETCH_URL)
    .then(async res => {
      if (res.ok) {
        return await res.json()
      } else {
        const errorMessage = await res.text()
        return Promise.reject(new Error(errorMessage))
      }
    })
    .then(data => handleData(wineTypeEncoded, data))

  function handleData(wine_type, { text, pairings }) {
    return upsertDishPairing(wine_type, text, pairings)
  }
}
