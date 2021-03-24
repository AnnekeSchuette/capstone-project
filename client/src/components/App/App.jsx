import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import quarterCircle from 'assets/quarterCircle.svg'
import Header from 'components/Header/Header'
import SearchForm from 'components/SearchForm/SearchForm'
import WineListing from 'components/WineListing/WineListing'
import WineStorage from 'components/WineStorage/WineStorage'
import Navigation from 'components/Navigation/Navigation'
import useToggleFavorite from 'hooks/useToggleFavorite'
import usePageInfo from 'hooks/usePageInfo'
import useApi from 'hooks/useApi'
import useSearchForm from 'hooks/useSearchForm'
import useLocalStorage from 'hooks/useLocalStorage'

export default function App() {
  const [currentPage, setCurrentPage, pages] = usePageInfo(0)
  const [savedWines, toggleFavStatus] = useToggleFavorite('wines', [])
  const [wineRecs, setWineRecs, getWinePairing] = useApi('wineRecs', [])

  const [search, setSearch, isDisabled] = useSearchForm()
  const [recentSearch, setRecentSearch] = useLocalStorage('recentSearch', [])

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
              recentSearch={recentSearch}
              results={wineRecs}
              onFavToggle={toggleFavStatus}
              savedWines={savedWines}
            />
          </Route>
          <Route path="/wine-recommendation">
            <WineListing
              recentSearch={recentSearch}
              results={wineRecs}
              onFavToggle={toggleFavStatus}
              savedWines={savedWines}
            />
          </Route>
          <Route exact path="/">
            <SearchForm
              isDisabled={isDisabled}
              onSubmit={handleSubmit}
              search={search}
              setSearch={setSearch}
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

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { searchInput } = form.elements
    setRecentSearch(searchInput.value)
    setCurrentPage(2)
    return setWineRecs(getWinePairing(searchInput.value))
  }
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
  h2 {
    text-align: center;
  }
`
