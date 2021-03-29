import { NavLink, Route, Switch, useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import quarterCircle from 'assets/quarterCircle.svg'
import Input from 'components/Input/Input'
import Header from 'components/Header/Header'
import Navigation from 'components/Navigation/Navigation'
import SearchForm from 'components/SearchForm/SearchForm'
import WineListing from 'components/WineListing/WineListing'
import WineDetailPage from 'components/WineDetailPage/WineDetailPage'
import WineStorage from 'components/WineStorage/WineStorage'
import usePageInfo from 'hooks/usePageInfo'
import useWineRecommendations from 'hooks/useWineRecommendations'
import useWineDetail from 'hooks/useWineDetail'
import useLocalStorage from 'hooks/useLocalStorage'
import useSearchForm from 'hooks/useSearchForm'
import useToggleFavorite from 'hooks/useToggleFavorite'
import getDishPairing from 'services/getDishPairing'
import getDishPairingApi from 'services/getDishPairingApi'

export default function App() {
  const history = useHistory()
  const [currentPage, setCurrentPage, pages] = usePageInfo(2)
  const [savedWines, toggleFavStatus] = useToggleFavorite('wines', [])
  const [search, setSearch, isDisabled] = useSearchForm()
  const [queryWineSearch, setQueryWineSearch] = useLocalStorage(
    'queryWineSearch',
    []
  )
  const [wineRecs, setWineRecs, getWinePairing] = useWineRecommendations(
    'wineRecs',
    []
  )
  const [queryDishSearch, setQueryDishSearch] = useLocalStorage(
    'queryDishSearch',
    []
  )
  const [dishPairing, setDishPairing] = useState({})
  const [allDishPairings, setAllDishPairings] = useLocalStorage(
    'dishPairings',
    []
  )

  useEffect(() => {
    getAllDishPairings()
  }, [])

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
          <Route path={`/wine/:wineId`}>
            <WineDetailPage />
          </Route>
          <Route path="/wine-recommendation">
            <WineListing
              recentSearch={queryWineSearch}
              results={wineRecs}
              onFavToggle={toggleFavStatus}
              savedWines={savedWines}
            />
          </Route>
          <Route exact path="/dish-pairing">
            {dishPairing && (
              <div>
                <p>{dishPairing.wine_type}</p>
                <p>{dishPairing.text}</p>
                <p>{dishPairing.pairings}</p>
              </div>
            )}
          </Route>
          <Route exact path="/search/dish">
            <SearchForm
              isDisabled={isDisabled}
              onSubmit={handleSearchDish}
              search={search}
              setSearch={setSearch}
            >
              <Input
                label="Find dishes to match your wine"
                placeholder="Type in a wine type ..."
                onChange={e => setSearch(e.target.value)}
                type="text"
                name="searchInput"
              />
            </SearchForm>
          </Route>
          <Route exact path="/search/wine">
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
              />
            </SearchForm>
          </Route>
          <Route exact path="/">
            <NavLink to="/search/wine">Find a wine</NavLink>
            <NavLink to="/search/dish">Find a dish</NavLink>
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

  function getAllDishPairings() {
    getDishPairing().then(data => setAllDishPairings([...data]))
  }

  function handleSearchRecs(event) {
    event.preventDefault()
    const form = event.target
    const { searchInput } = form.elements
    setQueryWineSearch(searchInput.value)
    setCurrentPage(2)
    return setWineRecs(getWinePairing(searchInput.value))
  }

  function handleSearchDish(event) {
    event.preventDefault()
    const form = event.target
    const { searchInput } = form.elements
    setQueryDishSearch(searchInput.value)

    function checkIsInDatabase() {
      const filteredList = allDishPairings.filter(
        pairing => pairing.wine_type === queryDishSearch
      )

      if (filteredList[0] && filteredList[0].length >= 1) {
        return setDishPairing([filteredList[0]])
      } else {
        return getDishPairingApi(queryDishSearch)
          .then(data => setDishPairing(data))
          .then(history.push('/dish-pairing'))
      }
    }

    return checkIsInDatabase(queryDishSearch)
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
