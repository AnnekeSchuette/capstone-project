import Navigation from 'components/Navigation/Navigation'
import FoodAndWine from 'assets/icons/foodAndWine.svg'
import AlcoholicBeverageLicensing from 'assets/icons/alcoholicBeverageLicensing.svg'
import { actions } from '@storybook/addon-actions'

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

export default {
  title: 'Capstone Project/Navigation',
  component: Navigation,
}

const Template = args => <Navigation {...args} {...events} />
const events = actions({ onNavigate: 'navigated' })

export const Default = Template.bind({})
Default.args = {
  pages: pages,
  currentPage: 0,
}
