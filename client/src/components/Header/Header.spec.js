import { screen, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import Header from 'components/Header/Header'

describe('Header', () => {
  it('renders an app header with title and subtitle', () => {
    render(<Header title="The title" subtitle="This is the  subtitle" />, {
      wrapper: MemoryRouter,
    })
    expect(screen.queryByText('The title')).toBeInTheDocument()
    expect(screen.queryByText('This is the subtitle')).toBeInTheDocument()
  })
})
