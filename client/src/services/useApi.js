import useLocalStorage from 'hooks/useLocalStorage'

export default function useApi() {
  const [wineRecs, setWineRecs] = useLocalStorage('wineRecs', [])
  require('dotenv').config()

  const { REACT_APP_API_KEY_SPOONACULAR } = process.env
  const SPOONACULAR_API_BASEURL = 'https://api.spoonacular.com'

  const getWinePairing = (food, opts) => {
    const WINE_PAIRING_URL = `${SPOONACULAR_API_BASEURL}/food/wine/pairing?apiKey=${REACT_APP_API_KEY_SPOONACULAR}&food=${food}`

    fetch(WINE_PAIRING_URL)
      .then(res => res.json())
      .then(data => {
        setWineRecs(data)
      })
      .then(console.log(wineRecs))
      .catch(error => console.error(error))
  }
  const getWineRecommendations = (
    wineName,
    maxPrice = 50,
    minRating = 0.7,
    numberResults = 10
  ) => {
    const WINE_RECS_URL = `${SPOONACULAR_API_BASEURL}/food/wine/recommendation?apiKey=${REACT_APP_API_KEY_SPOONACULAR}&wine=${wineName}&maxPrice=${maxPrice}&minRating=${minRating}&number=${numberResults}`

    fetch(WINE_RECS_URL)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }

  return [getWinePairing, getWineRecommendations, wineRecs, setWineRecs]
}
