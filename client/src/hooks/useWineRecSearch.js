import { useHistory } from 'react-router-dom'
import useLocalStorage from 'hooks/useLocalStorage'

export default function useWineRecSearch() {
  const history = useHistory()
  const [queryWineSearch, setQueryWineSearch] = useLocalStorage(
    'queryWineSearch',
    []
  )

  function handleSearchRecs(event) {
    event.preventDefault()
    const form = event.target
    const { searchInput } = form.elements
    setQueryWineSearch(searchInput.value)
    return history.push(`/wine/recommendation/${searchInput.value}`)
  }

  return [queryWineSearch, setQueryWineSearch, handleSearchRecs]
}
