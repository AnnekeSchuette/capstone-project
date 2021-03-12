import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WineListing from 'components/WineListing/WineListing'
import WineCard from 'components/WineCard/WineCard'

describe('WineListing', () => {
  it('takes in data and renders child component, which should include the title "Finca La Celia Elite Malbec"', () => {
    const testdata = [
      {
        id: 493086,
        title: 'Finca La Celia Elite Malbec',
        description:
          'Complex aromas where the red and juicy fruit stands out, with elegant floral contribution and fresh herbs.The aging in oak has achieved in this wine an exquisite combination prevailing the fruit. In mouth there is an austere entrance and great length. In the mouth, the tannins are soft and silky. Ideal to drink with goat cheese board, contains roasted vaccine, humita, roasted vegetables, pears in Malbec reduction. ',
        price: '$19.99',
        imageUrl: 'https://spoonacular.com/productImages/493086-312x231.jpg',
        averageRating: 1.0,
        ratingCount: 11.0,
        score: 0.9705882352941176,
        link:
          'https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Ffinca-la-celia-elite-malbec-2017%2F587251',
      },
    ]
    render(<WineListing results={testdata} />)
    expect(
      screen.queryByText('Finca La Celia Elite Malbec')
    ).toBeInTheDocument()
  })
})
