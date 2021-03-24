import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Input from 'components/Input/Input'

describe('Input', () => {
  it('renders a Input component with label and input field', () => {
    const callback = jest.fn()

    render(
      <Input
        label="This is a label"
        name="TestInput"
        value="This is the input value"
        placeholder="Placeholder to hint the user what to type in"
        onChange={callback}
      />
    )
    expect(screen.getByLabelText(/This is a label/i)).toBeInTheDocument()
    expect(
      screen.getByDisplayValue(/This is the input value/i)
    ).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText(
        'Placeholder to hint the user what to type in'
      )
    ).toBeInTheDocument()
  })
})
