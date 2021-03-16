import { useState, useMemo } from 'react'

function useBookmark() {
  const [isBookmarked, setIsBookmarked] = useState(false)

  const handlers = useMemo(
    () => ({
      active: () => {
        setIsBookmarked(true)
      },
      inactive: () => {
        setIsBookmarked(false)
      },
      toggle: () => {
        setIsBookmarked(s => (s === true ? false : true))
      },
    }),
    []
  )
  return [isBookmarked, handlers]
}

function useSaveWine(currentWine) {
  const [savedWines, setSavedWines] = useState([])

  const handlers = useMemo(
    () => ({
      handleSaveWine: currentWine => {
        const isSaved = savedWines.some(
          savedWine => savedWine.id === currentWine.id
        )
        const removeWineArray = savedWines.filter(s => s.id !== currentWine.id)
        const addWineArray = [...savedWines, currentWine]

        setSavedWines(s => (isSaved ? removeWineArray : addWineArray))
      },
    }),
    [savedWines]
  )
  return [savedWines, handlers]
}

export { useSaveWine, useBookmark }
