import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { recommendedWines } from 'data/wine_recs_mixed_small.json'
import quarterCircle from 'assets/quarterCircle.svg'
import Header from 'components/Header/Header'
import WineListing from 'components/WineListing/WineListing'
import WineStorage from 'components/WineStorage/WineStorage'
import Navigation from 'components/Navigation/Navigation'
import useToggleFavorite from 'hooks/useToggleFavorite'
const pages = [
  { title: 'Explore', path: '/' },
  { title: 'Wine Storage', path: 'wine-storage' },
]

export default function App() {
  const [savedWines, toggleFavStatus] = useToggleFavorite('wines', [])

  return (
    <Grid>
      <Header title="Vinz" subtitle="Wine Assistant and Taste Journal" />
      <Main>
        <Switch>
          <Route path="/wine-storage">
            <WineStorage
              savedWines={savedWines}
              onFavToggle={toggleFavStatus}
            />
          </Route>
          <Route exact path="/">
            <WineListing
              results={recommendedWines}
              onFavToggle={toggleFavStatus}
              savedWines={savedWines}
            />
          </Route>
        </Switch>
      </Main>
      <Navigation pages={pages} />
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-rows: 75px auto 75px;
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
