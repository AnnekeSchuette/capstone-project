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
export default { useBookmark }
