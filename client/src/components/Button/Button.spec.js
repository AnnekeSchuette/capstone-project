import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Button from 'components/Button/Button'

describe('Button', () => {
  it('renders a button with text', () => {
    render(<Button buttonText="Testbutton" />)
    expect(screen.getByRole('button')).toHaveTextContent('Testbutton')
  })

  it('renders a button with text and an icon, which should be rendered AFTER the text (right)', () => {
    render(
      <Button
        buttonText="Testbutton with Icon right"
        iconPos="right"
        iconName="Sparkle"
      />
    )
    expect(screen.getByRole('button').lastChild.nodeName).toBe('svg')
  })

  it('renders a button with text and an icon, which should be rendered BEFORE the text (left)', () => {
    render(
      <Button
        buttonText="Testbutton with Icon left"
        iconPos="left"
        iconName="ArrowLeft"
      />
    )
    expect(screen.getByRole('button').firstChild.nodeName).toBe('svg')
  })
})
