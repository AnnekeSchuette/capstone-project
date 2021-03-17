import WineListing from 'components/WineListing/WineListing'
import { actions } from '@storybook/addon-actions'
import { recommendedWines } from 'data/wine_recommendations_malbec.json'

export default {
  title: 'Capstone Project/WineListing',
  component: WineListing,
}

const events = actions({ onBookmark: 'is bookmarked' })
export const defaultWineListing = () => (
  <WineListing results={recommendedWines} {...events} />
)
