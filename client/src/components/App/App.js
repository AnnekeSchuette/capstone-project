import styled from 'styled-components'
import AppHeader from '../AppHeader/AppHeader'

export default function App({ content }) {
  return (
    <AppGrid>
      <AppHeader
        title="Pop &amp; Pour"
        subtitle="Wine Assistant and Taste Journal"
      />
      <AppMain>{content}</AppMain>
    </AppGrid>
  )
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 70px auto 48px;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
const AppMain = styled.main`
  padding: var(--space-medium);
  overflow-y: scroll;
`
