import { Route, Switch, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import quarterCircle from 'assets/quarterCircle.svg'
import Input from 'components/Input/Input'
import Header from 'components/Header/Header'
import Navigation from 'components/Navigation/Navigation'
import SearchForm from 'components/SearchForm/SearchForm'
import WineListing from 'pages/WineListing/WineListing'
import WineDetailPage from 'pages/WineDetailPage/WineDetailPage'
import WineStorage from 'pages/WineStorage/WineStorage'
import JournalPage from 'pages/JournalPage/JournalPage'
import usePageInfo from 'hooks/usePageInfo'
import useWineRecommendations from 'hooks/useWineRecommendations'
import ReceptionPage from 'pages/ReceptionPage'
import useLocalStorage from 'hooks/useLocalStorage'
import useSearchForm from 'hooks/useSearchForm'
import useToggleFavorite from 'hooks/useToggleFavorite'
import DishPairingPage from 'pages/DishPairingPage/DishPairingPage'

export default function App() {
  const history = useHistory()
  const [currentPage, setCurrentPage, pages] = usePageInfo(2)
  const [savedWines, toggleFavStatus] = useToggleFavorite('wines', [])
  const [search, setSearch, isDisabled] = useSearchForm()
  const [queryWineSearch, setQueryWineSearch] = useLocalStorage(
    'queryWineSearch',
    []
  )
  const [queryDishSearch, setQueryDishSearch] = useLocalStorage(
    'queryDishSearch',
    []
  )
  const [wineRecs, setWineRecs, getWinePairing] = useWineRecommendations(
    'wineRecs',
    []
  )
  const user = '605d0ce2b0fee964524884fc'

  return (
    <Grid>
      <Header
        title="Vinz"
        subtitle={pages
          .filter(page => page.path === currentPage ?? page.title === 'Vinz.')
          .map(page => page.subtitle)}
      />
      <Main>
        <Switch>
          <Route exact path="/wine/storage">
            <WineStorage
              savedWines={savedWines}
              onFavToggle={toggleFavStatus}
            />
          </Route>
          <Route exact path="/journal">
            <JournalPage />
          </Route>
          <Route exact path={`/wine/detail/:wineId`}>
            <WineDetailPage user={user} />
          </Route>
          <Route exact path={`/dish-pairing/:wineType`}>
            <DishPairingPage recentSearch={queryDishSearch} />
          </Route>
          <Route exact path="/wine/recommendation">
            <WineListing
              recentSearch={queryWineSearch}
              results={wineRecs}
              onFavToggle={toggleFavStatus}
              savedWines={savedWines}
            />
          </Route>
          <Route exact path="/dish-pairing">
            <SearchForm
              isDisabled={isDisabled}
              onSubmit={handleSearchDish}
              search={search}
              setSearch={setSearch}
            >
              <Input
                label="Find dishes to complement your wine"
                placeholder="Type in wine type, e.g. 'Shiraz', 'Riesling' ..."
                onChange={e => setSearch(e.target.value)}
                type="text"
                name="searchInput"
                autoComplete="off"
              />
            </SearchForm>
          </Route>
          <Route exact path="/wine">
            <SearchForm
              isDisabled={isDisabled}
              onSubmit={handleSearchRecs}
              search={search}
              setSearch={setSearch}
            >
              <Input
                label="Get wine recommendations for your meal"
                placeholder="Type in a dish, ingredient or cuisine ..."
                onChange={e => setSearch(e.target.value)}
                type="text"
                name="searchInput"
                autoComplete="off"
              />
            </SearchForm>
          </Route>
          <Route exact path="/" component={ReceptionPage} />
        </Switch>
      </Main>
      <Navigation
        pages={pages}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />
    </Grid>
  )

  function handleSearchRecs(event) {
    event.preventDefault()
    const form = event.target
    const { searchInput } = form.elements
    setQueryWineSearch(searchInput.value)
    return setWineRecs(getWinePairing(searchInput.value, 50))
  }

  function handleSearchDish(event) {
    event.preventDefault()
    const form = event.target
    const { searchInput } = form.elements

    setQueryDishSearch(searchInput.value)
    return history.push(`/dish-pairing/${searchInput.value}`)
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
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &:-webkit-scrollbar {
    display: none;
  }

  &::after {
    content: '';
    display: block;
    height: var(--space-large);
  }
`
