### This folder contains static json data from spoonacular API

Files:

- recipes.json
  Bulk of "Beef" and "Salmon"
  Request: GET recipes complex search

  ```
  {{baseUrl}}/recipes/findByIngredients?ingredients="Salmon"&number=25
  ```

- random_recipes.json
  Request: GET random recipes

  ```
  {{baseUrl}}/recipes/random?number=100
  ```

  - recipes_results.json
    Request: GET Search recipes

  ```
  {{baseUrl}}/recipes/complexSearch?intolerances="gluten"&number=100
  ```

- recipes_lowcarb.json
  Request: GET Search recipes by nutrients
  ```
  {{baseUrl}}/recipes/findByNutrients?maxCarbs=50&number=25
  ```
