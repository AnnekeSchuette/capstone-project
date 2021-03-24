import { useState, useEffect, useCallback } from 'react'

export default function useSearchForm() {
  const [search, setSearch] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)

  const handleChange = useCallback(search => {
    search && search.length >= 3 ? setIsDisabled(false) : setIsDisabled(true)
  }, [])

  useEffect(() => {
    handleChange(search)
  }, [search, handleChange])

  return [search, setSearch, isDisabled, setIsDisabled]
}
