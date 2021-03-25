import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Navigation from 'components/Navigation/Navigation'
import FoodAndWine from 'assets/icons/foodAndWine.svg'
import AlcoholicBeverageLicensing from 'assets/icons/alcoholicBeverageLicensing.svg'
import { MemoryRouter } from 'react-router-dom'

const pages = [
  {
    title: 'Explore',
    subtitle: 'Wine Assistant and Taste Journal',
    path: '/',
    icon: FoodAndWine,
    showInNav: true,
  },
  {
    title: 'Wine Storage',
    subtitle: 'Wine Storage',
    path: 'wine-storage',
    icon: AlcoholicBeverageLicensing,
    showInNav: true,
  },
]
describe('Navigation', () => {
  it('renders a navigation component with buttons, including icons and subtitles from pages const', () => {
    render(<Navigation pages={pages} />, { wrapper: MemoryRouter })
    expect(screen.getByRole('link', { name: 'Explore' })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: 'Wine Storage' })
    ).toBeInTheDocument()
  })
})
