import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WineCard from 'components/WineCard/WineCard'

const testdata = {
  key: 454160,
  title: 'Gascon Malbec Riserva',
  description:
    'Dark, rich and complex, Don Miguel Gascon Reserva Malbec is a powerful, yet fresh, wine. An elegant nose features hints of violet, blackberry and blackcurrants, with subtle aromas of chocolate mint. The wine is robust and strong on the palate, with smooth tannins and distinctive layers of dried plum, dates and cherry flavors that integrate seamlessly with notes of almond and hazelnut, backed up by a long and velvety-smooth finish.',
  price: '$12.99',
  imageUrl: 'https://spoonacular.com/productImages/454160-312x231.jpg',
  averageRating: 0.8800000000000001,
  score: 0.8175000000000001,
}

describe('WineCard', () => {
  it('renders a card with the title "Gascon Malbec Riserva"', () => {
    render(<WineCard {...testdata} />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Gascon Malbec Riserva'
    )
  })

  it('renders an image', () => {
    render(<WineCard {...testdata} />)
    expect(screen.getByRole('figure')).toBeVisible()
    expect(screen.getByRole('img')).toBeVisible()
  })

  it('renders an image of higher quality', () => {
    render(<WineCard {...testdata} />)
    expect(screen.getByRole('img').src).toMatch(/636x393/i)
  })

  it('renders a list of information: price, rating, score', () => {
    render(<WineCard {...testdata} />)
    expect(
      screen.queryByRole('definition', { name: 'Price (avg):' })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('definition', { name: 'Rating:' })
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('definition', { name: 'Score:' })
    ).toBeInTheDocument()
  })

  it('renders the correct information for price ("$12.99"), rating (8.8) andscore (8.2)', () => {
    render(<WineCard {...testdata} />)
    expect(
      screen.queryByRole('definition', { name: 'Price (avg):' })
    ).toHaveTextContent('$12.99')
    expect(
      screen.queryByRole('definition', { name: 'Rating:' })
    ).toHaveTextContent(8.8)
    expect(
      screen.queryByRole('definition', { name: 'Score:' })
    ).toHaveTextContent(8.2)
  })

  it('shows "n.a", if a list value is empty', () => {
    render(<WineCard title="Wine with title only" id="454160" />)
    expect(
      screen.queryByRole('definition', { name: 'Price (avg):' })
    ).toHaveTextContent('n.a.')
    expect(
      screen.queryByRole('definition', { name: 'Rating:' })
    ).toHaveTextContent('n.a.')
    expect(
      screen.queryByRole('definition', { name: 'Score:' })
    ).toHaveTextContent('n.a.')
  })

  it('renders a card with a truncated description text of 20 words, which is 77 characters including (...)', () => {
    render(<WineCard {...testdata} />)
    expect(screen.queryByText(/Dark, rich and complex/i)).toBeInTheDocument()
    screen.debug()
    expect(
      screen.getByText(/Dark, rich and complex/i).textContent
    ).toHaveLength(77)
  })

  it('renders a card with a truncated text of 12 words', () => {
    render(<WineCard {...testdata} />)
    expect(screen.queryByText(/Dark, rich and complex/i)).toBeInTheDocument()
    expect(
      screen
        .getByText(/Dark, rich and complex/i)
        .textContent.replace(' (...)', '')
        .split(' ').length
    ).toBe(12)
  })

  it('renders a bookmark icon on card', () => {
    render(<WineCard {...testdata} />)
    expect(screen.getByRole('button', { name: 'Bookmark' })).toBeInTheDocument()
  })
})
