import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import SearchForm from 'components/SearchForm/SearchForm'
import Input from 'components/Input/Input'

describe('SearchForm', () => {
  it('renders a searchform with input field (text) and search button', () => {
    render(
      <SearchForm>
        <Input
          label="Get wine recommendations for your meal"
          placeholder="Type in a dish, ingredient or cuisine ..."
        />
      </SearchForm>
    )
    expect(
      screen.getByLabelText('Get wine recommendations for your meal')
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('Type in a dish, ingredient or cuisine ...')
    ).toBeInTheDocument()
  })
  it('calls function onSubmit on form submit', () => {
    const callback = jest.fn()
    render(<SearchForm onSubmit={callback} />)
    fireEvent.submit(screen.getByRole('button', { name: 'Submit' }))
    expect(callback).toHaveBeenCalled()
  })
  it('updates on change', () => {
    const setSearch = jest.fn(value => {})

    const { queryByPlaceholderText } = render(
      <SearchForm setSearch={setSearch}>
        <Input
          label="Get wine recommendations for your meal"
          placeholder="Type in a dish, ingredient or cuisine ..."
        />
      </SearchForm>
    )

    const searchInput = queryByPlaceholderText(
      'Type in a dish, ingredient or cuisine ...'
    )

    fireEvent.change(searchInput, { target: { value: 'test' } })

    expect(searchInput.value).toBe('test')
  })
  it('renders a submit button, which is initially disabled', () => {
    render(<SearchForm />)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
