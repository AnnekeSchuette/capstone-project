import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SearchForm from 'components/SearchForm/SearchForm'

describe('SearchForm', () => {
  test.todo(
    'renders a searchform with input field (text) and search button',
    () => {
      render(<SearchForm />)
    }
  )
  it('updates on change', () => {
    const setSearch = jest.fn(value => {})

    const { queryByPlaceholderText } = render(
      <SearchForm setSearch={setSearch} />
    )

    const searchInput = queryByPlaceholderText(
      'Type in a dish, ingredient or cuisine ...'
    )

    fireEvent.change(searchInput, { target: { value: 'test' } })

    expect(searchInput.value).toBe('test')
  })
})
