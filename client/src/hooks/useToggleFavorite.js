import useLocalStorage from 'hooks/useLocalStorage'

export default function useHandleSave() {
  const [savedWines, setSavedWines] = useLocalStorage('wines', [])

  function saveWine(target) {
    const newSavedWine = target
    setSavedWines([newSavedWine, ...savedWines])
  }
  function removeWine(target) {
    const updatedSavedWines = savedWines.filter(wine => wine.id !== target.id)
    setSavedWines([...updatedSavedWines])
  }

  function toggleFavStatus(target) {
    const includesTarget =
      savedWines !== undefined
        ? savedWines.some(item => item.id === target.id)
        : false
    if (includesTarget) {
      removeWine(target)
    } else {
      saveWine(target)
    }
  }
  return [savedWines, toggleFavStatus]
}
