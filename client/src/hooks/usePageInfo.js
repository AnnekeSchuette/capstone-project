import { useState } from 'react'
import FoodAndWine from 'assets/icons/foodAndWine.svg'
import AlcoholicBeverageLicensing from 'assets/icons/alcoholicBeverageLicensing.svg'

export default function usePageInfo() {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    {
      title: 'Explore',
      subtitle: 'Wine Assistant and Taste Journal',
      path: '/',
      icon: FoodAndWine,
    },
    {
      title: 'Wine Storage',
      subtitle: 'Wine Storage',
      path: 'wine-storage',
      icon: AlcoholicBeverageLicensing,
    },
  ]
  return [currentPage, setCurrentPage, pages]
}
