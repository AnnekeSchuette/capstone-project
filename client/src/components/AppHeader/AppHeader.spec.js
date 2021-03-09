import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AppHeader from './AppHeader'

describe('AppHeader', () => {
  it('renders an app header with title', () => {
    render(<AppHeader title="The title" subtitle="This is subtitle" />)
    expect(screen.queryByText('The title')).toBeInTheDocument()
  })

  it('renders an app header with subtitle', () => {
    render(<AppHeader title="The title" subtitle="This is the subtitle" />)
    expect(screen.queryByText('This is the subtitle')).toBeInTheDocument()
  })
})
