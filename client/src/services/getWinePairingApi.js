export default function getWinePairingApi(food, maxPrice = 50) {
  require('dotenv').config()
  const { REACT_APP_API_SPOONACULAR_KEY2 } = process.env
  const { REACT_APP_API_SPOONACULAR_BASEURL } = process.env

  const fetchUrl = `${REACT_APP_API_SPOONACULAR_BASEURL}/food/wine/pairing?apiKey=${REACT_APP_API_SPOONACULAR_KEY2}&food=${food}&maxPrice=${maxPrice}`

  if (food === undefined || food === null) {
    throw new Error(
      "Missing the required parameter 'food' when calling getWineRecommendation"
    )
  }

  return fetch(fetchUrl)
    .then(res => (res.ok ? res.json() : new Error(res.text())))
    .then(data => data)
}
