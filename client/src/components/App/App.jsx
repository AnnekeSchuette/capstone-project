import styled from 'styled-components'
import quarterCircle from 'assets/quarterCircle.svg'
import { recommendedWines } from 'data/wine_recs_mixed_small.json'
import Header from 'components/Header/Header'
import WineListing from 'components/WineListing/WineListing'
import WineStorage from 'components/WineStorage/WineStorage'
import { Route, Switch } from 'react-router-dom'
import useHandleSave from 'hooks/useHandleSave'
import Navigation from 'components/Navigation/Navigation'

export default function App() {
  const [savedWines, toggleSave] = useHandleSave()

  return (
    <Grid>
      <Header title="Vinz" subtitle="Wine Assistant and Taste Journal" />
      <Main>
        <Switch>
          <Route path="/wine-storage">
            <WineStorage savedWines={savedWines} onSaveToggle={toggleSave} />
          </Route>
          <Route path="/">
            <WineListing
              results={recommendedWines}
              onSaveToggle={toggleSave}
              savedWines={savedWines}
            />
          </Route>
        </Switch>
        <Navigation />
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
