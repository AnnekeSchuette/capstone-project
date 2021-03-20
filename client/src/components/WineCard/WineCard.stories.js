import WineCard from 'components/WineCard/WineCard'
import { actions } from '@storybook/addon-actions'

export default {
  title: 'Capstone Project/WineCard',
  component: WineCard,
}

const Template = args => <WineCard {...args} {...events} />
const events = actions({ onBookmark: 'is bookmarked' })

export const Default = Template.bind({})
Default.args = {
  id: 428219,
  title: 'Vampire Pinot Grigio Wine',
  description:
    'This dry, zestful combination is reminiscent of ripe pears and roses',
  price: '$17.95',
  imageUrl: 'https://spoonacular.com/productImages/428219-312x231.jpg',
  averageRating: 0.9,
  ratingCount: 3,
  score: 0.8,
  link:
    'https://www.amazon.com/2015-Vampire-Pinot-Grigio-Wine/dp/B00PSQ589E?tag=spoonacular-20',
}
