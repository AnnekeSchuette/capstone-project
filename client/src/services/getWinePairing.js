const SpoonacularApi = require('spoonacular_api')

export default function getWinePairing(food, opts) {
  let apiInstance = new SpoonacularApi.DefaultApi()
  apiInstance.getWinePairing(food, opts, (error, data, response) => {
    if (error) {
      console.error(error)
    } else {
      console.log('API called successfully. Returned data: ' + data)
    }
  })
}
