import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import JournalBook from 'assets/icons/journalBook.svg'
import AlcoholicBeverageLicensing from 'assets/icons/alcoholicBeverageLicensing.svg'

export default function usePageInfo() {
  const [currentPage, setCurrentPage] = useState('/')
  const location = useLocation()
  const currentPath = location.pathname
  const currentPathShort =
    currentPath.split('/').length > 3
      ? currentPath.slice(0, currentPath.lastIndexOf('/'))
      : currentPath

  useEffect(() => {
    return setCurrentPage(currentPathShort)
  }, [currentPathShort])

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
      title: 'Dish Pairing Result',
      subtitle: 'Dish Pairings',
      path: '/dish-pairing/result',
      showInNav: false,
    },
    {
      title: 'Search',
      subtitle: 'Wine Search',
      path: '/wine',
      showInNav: false,
    },
    {
      title: 'Wine Detail',
      subtitle: 'Wine Detail',
      path: '/wine/detail',
      showInNav: false,
    },
  ]
  return [currentPage, setCurrentPage, pages]
}
