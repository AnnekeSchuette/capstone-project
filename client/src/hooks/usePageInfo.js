import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import JournalBook from 'assets/icons/journalBook.svg'
import AlcoholicBeverageLicensing from 'assets/icons/alcoholicBeverageLicensing.svg'

export default function usePageInfo() {
  const [currentPage, setCurrentPage] = useState('/')
  const location = useLocation()

  useEffect(() => {
    return setCurrentPage(location.pathname)
  }, [location.pathname])

  const pages = [
    {
      title: 'Wine Storage',
      subtitle: 'Wine Storage',
      path: '/wine/storage',
      icon: AlcoholicBeverageLicensing,
      showInNav: true,
    },
    {
      title: 'Journal',
      subtitle: 'Tasting Journal',
      path: '/journal',
      icon: JournalBook,
      showInNav: true,
    },
    {
      title: 'Wine Recommendation',
      subtitle: 'Wine Recommendation',
      path: '/wine/recommendation',
      showInNav: false,
    },
    {
      title: 'Vinz.',
      subtitle: 'Wine Assistant and Taste Journal',
      path: '/',
      showInNav: false,
    },
    {
      title: 'Search',
      subtitle: 'Dish Search',
      path: '/dish-pairing',
      showInNav: false,
    },
    {
      title: 'Search',
      subtitle: 'Wine Search',
      path: '/wine',
      showInNav: false,
    },
  ]
  return [currentPage, setCurrentPage, pages]
}
