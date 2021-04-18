import { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom'

export default function useSearchForm() {
  const history = useHistory()
  const [search, setSearch] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)

  const handleChange = useCallback(search => {
    search && search.length >= 3 ? setIsDisabled(false) : setIsDisabled(true)
  }, [])

  useEffect(() => {
    handleChange(search)
  }, [search, handleChange])

  function handleSubmit(event, path) {
    event.preventDefault()
    const form = event.target
    const { searchInput } = form.elements

    return history.push(`${path}${searchInput.value}`)
  }

  return [handleSubmit, search, setSearch, isDisabled, setIsDisabled]
}
