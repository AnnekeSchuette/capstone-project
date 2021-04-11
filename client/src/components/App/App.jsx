import { Route, Switch } from 'react-router-dom'
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
import ReceptionPage from 'pages/ReceptionPage'
import useSearchForm from 'hooks/useSearchForm'
import useWineRecSearch from 'hooks/useWineRecSearch'
import useDishSearch from 'hooks/useDishSearch'
import useToggleFavorite from 'hooks/useToggleFavorite'
import DishPairingPage from 'pages/DishPairingPage/DishPairingPage'

export default function App() {
  const [currentPage, setCurrentPage, pages] = usePageInfo('/')
  const currentSubtitle = pages
    .filter(page => currentPage === page.path)
    .map(page => page.subtitle)
    .toString()

  const [savedWines, toggleFavStatus] = useToggleFavorite('wines', [])
  const [search, setSearch, isDisabled] = useSearchForm()
  const [handleSearchRecs, queryWineSearch] = useWineRecSearch()
  const [handleSearchDish, queryDishSearch] = useDishSearch()

  const user = '605d0ce2b0fee964524884fc'

  return (
    <Grid>
      <Header title="Vinz" subtitle={currentSubtitle} />
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
          <Route exact path={`/dish-pairing/result/:wineType`}>
            <DishPairingPage recentSearch={queryDishSearch} />
          </Route>
          <Route exact path="/wine/recommendation/:queryWineSearch">
            <WineListing
              recentSearch={queryWineSearch}
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
                autoFocus
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
                autoFocus
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
}

const Grid = styled.div`
  display: grid;
  grid-template-rows: 75px auto 75px;
  height: 100vh;
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
