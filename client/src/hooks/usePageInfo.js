import { useState } from 'react'
import FoodAndWine from 'assets/icons/foodAndWine.svg'
import AlcoholicBeverageLicensing from 'assets/icons/alcoholicBeverageLicensing.svg'

export default function usePageInfo() {
  const [currentPage, setCurrentPage] = useState(2)

  const pages = [
    {
      title: 'Explore',
      subtitle: 'Wine Recommendation',
      path: '/wine-recommendation',
      icon: FoodAndWine,
      showInNav: true,
    },
    {
      title: 'Wine Storage',
      subtitle: 'Wine Storage',
      path: '/wine-storage',
      icon: AlcoholicBeverageLicensing,
      showInNav: true,
    },
    {
      title: 'Search',
      subtitle: 'Wine Assistant and Taste Journal',
      path: '/',
      showInNav: false,
    },
  ]
  return [currentPage, setCurrentPage, pages]
}
