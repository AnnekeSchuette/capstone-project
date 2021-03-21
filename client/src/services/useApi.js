const SpoonacularApi = require('spoonacular_api')

const defaultClient = SpoonacularApi.ApiClient.instance
// Configure API key authorization: apiKeyScheme
require('dotenv').config()
let apiKeyScheme = defaultClient.authentications['apiKeyScheme']
apiKeyScheme.apiKey = process.env.SPOONACULAR_API_KEY
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//apiKeyScheme.apiKeyPrefix['apiKey'] = "Token"

/* const SPOONACULAR_API_BASEURL = 'https://api.spoonacular.com/'
const WINE_PAIRING_URL = `${SPOONACULAR_API_BASEURL}/food/wine/pairing&api_key=${process.env.REACT_APP_TMDB_API_KEY}`

const WINE_RECS_URL = `${SPOONACULAR_API_BASEURL}/food/wine/recommendation?api_key=${process.env.REACT_APP_TMDB_API_KEY}&wine=${wineName}&maxPrice=${maxPrice}&minRating=${minRating}&number=${numberResults}` */

const api = new SpoonacularApi.DefaultApi()

let food = 'steak'
let opts = {
  maxPrice: 50, // Number | The maximum price for the specific wine recommendation in USD.
  number: 10,
}
api.getWinePairing(food, opts, (error, data, response) => {
  if (error) {
    console.error(error)
  } else {
    console.log('API called successfully. Returned data: ' + data)
  }
})
