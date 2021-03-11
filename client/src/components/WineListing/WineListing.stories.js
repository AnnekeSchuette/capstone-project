import WineListing from 'components/WineListing/WineListing'
import { recommendedWines } from 'data/wine_recommendations_malbec.json'

export default {
  title: 'Capstone Project/WineListing',
  component: WineListing,
}

export const defaultWineListing = () => (
  <WineListing results={recommendedWines} />
)
