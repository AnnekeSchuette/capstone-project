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
  id: 454160,
  title: 'Gascon Malbec Riserva',
  description:
    'Dark, rich and complex, Don Miguel Gascon Reserva Malbec is a powerful, yet fresh, wine. An elegant nose features hints of violet, blackberry and blackcurrants, with subtle aromas of chocolate mint. The wine is robust and strong on the palate, with smooth tannins and distinctive layers of dried plum, dates and cherry flavors that integrate seamlessly with notes of almond and hazelnut, backed up by a long and velvety-smooth finish.',
  price: '$12.99',
  imageUrl: 'https://spoonacular.com/productImages/454160-312x231.jpg',
  averageRating: 0.8800000000000001,
  score: 0.8175000000000001,
}
