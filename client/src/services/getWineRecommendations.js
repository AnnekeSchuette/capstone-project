const SpoonacularApi = require('spoonacular_api')

export default function getWineRecommendations(wine, opts) {
  let apiInstance = new SpoonacularApi.DefaultApi()
  apiInstance.getWineRecommendation(wine, opts, (error, data, response) => {
    if (error) {
      console.error(error)
    } else {
      console.log('API called successfully. Returned data: ' + data)
    }
  })
}
