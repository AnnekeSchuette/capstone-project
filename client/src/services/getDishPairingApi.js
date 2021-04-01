import upsertDishPairing from './upsertDishPairing'

export default function getDishPairingApi(wine_type) {
  const wineTypeEncoded = wine_type.replace(' ', '_')
  const { REACT_APP_API_SPOONACULAR_KEY } = process.env
  const { REACT_APP_API_SPOONACULAR_BASEURL } = process.env

  const fetchUrl = `${REACT_APP_API_SPOONACULAR_BASEURL}/food/wine/dishes?apiKey=${REACT_APP_API_SPOONACULAR_KEY}&wine=${wineTypeEncoded}`

  return fetch(fetchUrl)
    .then(res => (res.ok ? res.json() : new Error(res.text())))
    .then(data => handleData(wineTypeEncoded, data))

  function handleData(wine_type, { text, pairings }) {
    return upsertDishPairing(wine_type, text, pairings)
  }
}
