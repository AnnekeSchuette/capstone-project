import { useHistory } from 'react-router-dom'
import useLocalStorage from 'hooks/useLocalStorage'

export default function useDishSearch() {
  const history = useHistory()
  const [queryDishSearch, setQueryDishSearch] = useLocalStorage(
    'queryDishSearch',
    []
  )

  function handleSearchDish(event) {
    event.preventDefault()
    const form = event.target
    const { searchInput } = form.elements

    setQueryDishSearch(searchInput.value)

    return history.push(`/dish-pairing/result/${searchInput.value}`)
  }

  return [handleSearchDish, queryDishSearch, setQueryDishSearch]
}
