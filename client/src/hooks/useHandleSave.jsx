import { useState, useEffect } from 'react'
import useLocalStorage from 'hooks/useLocalStorage'

function useHandleSave(currentWine) {
  const [savedWines, setSavedWines] = useLocalStorage('wines', [])
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    if (savedWines.some(savedWine => savedWine.id === currentWine.id)) {
      return setIsSaved(true)
    } else {
      return setIsSaved(false)
    }
  }, [savedWines, isSaved])

  function handleSave(currentWine) {
    let newWineArray = isSaved
      ? savedWines.filter(s => s.id !== currentWine.id)
      : [...savedWines, currentWine]
    return setSavedWines(newWineArray)
  }
  return [savedWines, setSavedWines, isSaved, setIsSaved, handleSave]
}
export default useHandleSave
