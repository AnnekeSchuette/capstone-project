import useLocalStorage from 'hooks/useLocalStorage'
import { useHistory } from 'react-router'
import upsertWineRecs from 'services/upsertWineRecs'

export default function useWineRecommendations() {
  const [wineRecs, setWineRecs] = useLocalStorage('wineRecs', [])
  const [moreWineRecs, setMoreWineRecs] = useLocalStorage('moreWineRecs', [])
  require('dotenv').config()
  const history = useHistory()

  const { REACT_APP_API_SPOONACULAR_KEY } = process.env
  const { REACT_APP_API_SPOONACULAR_BASEURL } = process.env

  const getWinePairing = (food, maxPrice, opts) => {
    const WINE_PAIRING_URL = `${REACT_APP_API_SPOONACULAR_BASEURL}/food/wine/pairing?apiKey=${REACT_APP_API_SPOONACULAR_KEY}&food=${food}&maxPrice=${maxPrice}`

    fetch(WINE_PAIRING_URL)
      .then(res => res.json())
      .then(data => {
        setWineRecs(data) && handleData(data)
        return history.push('/wine/recommendation')
      })
      .catch(error => () => {
        console.error(error)
      })
  }
  const getMoreWineRecommendations = (
    wineName,
    maxPrice = 150,
    minRating = 0.7,
    numberResults = 100
  ) => {
    const WINE_RECS_URL = `${REACT_APP_API_SPOONACULAR_BASEURL}/food/wine/recommendation?apiKey=${REACT_APP_API_SPOONACULAR_KEY}&wine=${wineName}&maxPrice=${maxPrice}&minRating=${minRating}&number=${numberResults}`

    fetch(WINE_RECS_URL)
      .then(res => res.json())
      .then(data =>
        setMoreWineRecs(
          ...moreWineRecs,
          data.recommendedWines.map(wine => wine)
        )
      )
      .catch(error => console.error(error))
  }

  function handleData(wine, { productMatches }) {
    return productMatches.map(item => upsertWineRecs({ ...item, type: wine }))
  }

  return [
    wineRecs,
    setWineRecs,
    getWinePairing,
    moreWineRecs,
    setMoreWineRecs,
    getMoreWineRecommendations,
  ]
}
