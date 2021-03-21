import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
import quarterCircle from 'assets/quarterCircle.svg'
import Header from 'components/Header/Header'
import SearchForm from 'components/SearchForm/SearchForm'
import WineListing from 'components/WineListing/WineListing'
import WineStorage from 'components/WineStorage/WineStorage'
import Navigation from 'components/Navigation/Navigation'
import useToggleFavorite from 'hooks/useToggleFavorite'
import usePageInfo from 'hooks/usePageInfo'
import useApi from 'services/useApi'

export default function App() {
  const [savedWines, toggleFavStatus] = useToggleFavorite('wines', [])
  const [currentPage, setCurrentPage, pages] = usePageInfo(0)
  const [
    getWinePairing,
    getWineRecommendations,
    wineRecs,
    setWineRecs,
  ] = useApi('wineRecs', [])

  const [search, setSearch] = useState('')

  return (
    <Grid>
      <Header title="Vinz" subtitle={pages[currentPage].subtitle} />
      <Main>
        <Switch>
          <Route path="/wine-storage">
            <WineStorage
              savedWines={savedWines}
              onFavToggle={toggleFavStatus}
            />
          </Route>
          <Route path="/results">
            <WineListing
              results={wineRecs}
              onFavToggle={toggleFavStatus}
              savedWines={savedWines}
            />
          </Route>
          <Route exact path="/">
            <SearchForm
              search={search}
              setSearch={setSearch}
              setWineRecs={setWineRecs}
              getWinePairing={getWinePairing}
              getWineRecommendations={getWineRecommendations}
            />
          </Route>
        </Switch>
      </Main>
      <Navigation
        pages={pages}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
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

  &::after {
    content: '';
    display: block;
    height: var(--space-large);
  }
`
