import styled from 'styled-components'
import Header from 'components/Header/Header'
import { recommendedWines } from 'data/wine_recommendations_malbec.json'
import WineListing from 'components/WineListing/WineListing'
import quarterCircle from 'assets/quarterCircle.svg'

export default function App() {
  return (
    <Grid>
      <Header title="Vinz" subtitle="Wine Assistant and Taste Journal" />
      <Main>
        <WineListing results={recommendedWines} />
      </Main>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-rows: 75px auto;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-position: fixed;
  background: no-repeat var(--color-background) right bottom
    url(${quarterCircle});
  background-size: contain;
  color: white;
`
const Main = styled.main`
  padding: var(--space-medium);
  overflow-y: scroll;
`
