import upsertWineRecs from 'services/upsertWineRecs'

export default function getWineRecommendationsApi(
  wine,
  maxPrice = 50,
  minRating = 0.7,
  number = 100
) {
  //const wineTypeEncoded = wine.replace(' ', '_')
  const { REACT_APP_API_SPOONACULAR_KEY2 } = process.env
  const { REACT_APP_API_SPOONACULAR_BASEURL } = process.env

  const FETCH_URL = `${REACT_APP_API_SPOONACULAR_BASEURL}/food/wine/recommendation?apiKey=${REACT_APP_API_SPOONACULAR_KEY2}&wine=${wine}&maxPrice=${maxPrice}&minRating=${minRating}&number=${number}`

  if (wine === undefined || wine === null) {
    throw new Error(
      "Missing the required parameter 'wine' when calling getWineRecommendation"
    )
  }

  return fetch(FETCH_URL)
    .then(async res => {
      if (res.ok) {
        return await res.json()
      } else {
        const errorMessage = await res.text()
        return Promise.reject(new Error(errorMessage))
      }
    })
    .then(data => handleData(wine, data))
    .then(data => console.log(data))

  function handleData(wine, { recommendedWines }) {
    return recommendedWines.map(item => upsertWineRecs({ ...item, type: wine }))
  }
}
