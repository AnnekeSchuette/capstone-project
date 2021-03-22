import { render, screen, userEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SearchForm from 'components/SearchForm/SearchForm'

describe('SearchForm', () => {
  test.todo(
    'renders a searchform with input field (text) and search button',
    () => {
      render(<SearchForm />)
    }
  )
  it('calls function onSubmit on form submit', () => {
    const callback = jest.fn()
    render(<SearchForm onSubmit={callback} />)
    userEvent.click(screen.getByRole('button'))
    expect(callback).toHaveBeenCalled()
  })
  it('updates on change', () => {
    const setSearch = jest.fn(value => {})

    const { queryByPlaceholderText } = render(
      <SearchForm setSearch={setSearch} />
    )

    const searchInput = queryByPlaceholderText(
      'Type in a dish, ingredient or cuisine ...'
    )

    userEvent.change(searchInput, { target: { value: 'test' } })

    expect(searchInput.value).toBe('test')
  })
})
