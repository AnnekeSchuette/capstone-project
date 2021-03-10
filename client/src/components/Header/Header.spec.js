import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Header from './Header'

describe('Header', () => {
  it('renders an app header with title', () => {
    render(<Header title="The title" subtitle="This is subtitle" />)
    expect(screen.queryByText('The title')).toBeInTheDocument()
  })

  it('renders an app header with subtitle', () => {
    render(<Header title="The title" subtitle="This is the subtitle" />)
    expect(screen.queryByText('This is the subtitle')).toBeInTheDocument()
  })
})
