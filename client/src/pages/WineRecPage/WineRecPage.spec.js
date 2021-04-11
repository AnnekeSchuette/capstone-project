import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WineRecPage from 'components/WineRecPage/WineRecPage'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'

const testdata = {
  pairedWines: ['bordeaux', 'champagne', 'white burgundy'],
  pairingText:
    'Souffle can be paired with Bordeaux, Champagne, and White Burgundy. French wine is just as diverse as French food, but you rarely go wrong with champagne. If your meal calls for a white wine, you might also try a white burgundy. For a red, try a red bordeaux blend. The Chateau Pindefleurs St-Emilion Bordeaux with a 4.5 out of 5 star rating seems like a good match. It costs about 22 dollars per bottle.',
  productMatches: [
    {
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
    },
    {
      id: 443696,
      title: 'Baron des Chartrons Bordeaux',
      description:
        'Nose of fresh red fruits. Great structure, soft tannins, and fresh finale of ripe cherry and blueberry. Elegant and very typical of the appellation.Baron des Chartrons Rouge is ideally paired with grilled beef, cheese pastas or lamb.',
      price: '$10.99',
      imageUrl: 'https://spoonacular.com/productImages/443696-312x231.jpg',
      averageRating: 0.9400000000000001,
      ratingCount: 5,
      score: 0.8775000000000001,
      link:
        'https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fbaron-des-chartrons-bordeaux-2015%2F164949',
    },
  ],
}

const history = createMemoryHistory()
history.push = jest.fn()

const wrapper = ({ children }) => <Router history={history}>{children}</Router>

describe('WineRecPage', () => {
  it('renders all productMatches in the list, which should be 2 WineCards in this case', () => {
    render(<WineRecPage results={testdata} />, { wrapper })
    expect(screen.queryAllByRole('heading', { level: 3 })).toHaveLength(2)
  })

  it('renders a "pairingText"', () => {
    render(<WineRecPage results={testdata} />, { wrapper })
    expect(
      screen.queryByText(
        /Souffle can be paired with Bordeaux, Champagne, and White Burgundy./i
      )
    ).toBeInTheDocument()
  })

  it('renders "pairedWines" as list', () => {
    render(<WineRecPage results={testdata} />, { wrapper })
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })
})
