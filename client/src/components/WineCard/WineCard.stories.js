import WineCard from 'components/WineCard/WineCard'
import { actions } from '@storybook/addon-actions'

export default {
  title: 'Capstone Project/WineCard',
  component: WineCard,
}

const Template = args => <WineCard {...args} {...events} />
const events = actions({ onFavToggle: 'is bookmarked' })

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
export const Favorite = Template.bind({})
Favorite.args = {
  savedWines: [{ id: 455113 }],
  id: 455113,
  title: 'Chateau Pindefleurs St-Emilion Bordeaux',
  description:
    'The complex aroma is punctuated by long-lasting touches of fully-ripe red berries. Drunk as a young wine, Château Pindefleurs allows its fresh fruitiness to blossom. Kept in a cellar, it unrolls a long and silky taste in the mouth, the mark of the Grands Crus of Saint-Emilion.\nBlend: 90% Merlot, 5% Cabernet Sauvignon, 5% Cabernet Franc',
  price: '$21.99',
  imageUrl: 'https://spoonacular.com/productImages/455113-312x231.jpg',
  averageRating: 0.9,
  ratingCount: 5,
  score: 0.8375,
  link:
    'https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fchateau-pindefleurs-st-emilion-bordeaux-2009%2F125798',
}
