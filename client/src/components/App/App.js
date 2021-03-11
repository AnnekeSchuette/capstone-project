import styled from 'styled-components'
import Header from 'components/Header/Header'
import WineCard from 'components/WineCard/WineCard'
import { recommendedWines } from 'data/wine_recommendations_malbec.json'

export default function App() {
  return (
    <Grid>
      <Header title="Pop &amp; Pour" subtitle="Wine, Dine and Journal" />
      <Main></Main>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-rows: 70px auto 48px;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    145deg,
    var(--color-secondary) 18%,
    var(--color-primary) 100%
  );
  color: white;
  background: var(--color-background);
`
const Main = styled.main`
  padding: var(--space-medium);
  overflow-y: scroll;
`
