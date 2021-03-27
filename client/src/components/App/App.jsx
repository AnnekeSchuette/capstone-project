import { NavLink, Route, Switch, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import quarterCircle from 'assets/quarterCircle.svg'
import Header from 'components/Header/Header'
import Input from 'components/Input/Input'
import SearchForm from 'components/SearchForm/SearchForm'
import WineListing from 'components/WineListing/WineListing'
import WineStorage from 'components/WineStorage/WineStorage'
import Navigation from 'components/Navigation/Navigation'
import useToggleFavorite from 'hooks/useToggleFavorite'
import usePageInfo from 'hooks/usePageInfo'
import useApi from 'hooks/useApi'
import useSearchForm from 'hooks/useSearchForm'
import useLocalStorage from 'hooks/useLocalStorage'
import getDishPairing from 'services/getDishPairing'
import getDishPairingApi from 'services/getDishPairingApi'
import { useEffect, useState } from 'react'

export default function App() {
  const [currentPage, setCurrentPage, pages] = usePageInfo(2)
  const history = useHistory()
  const [savedWines, toggleFavStatus] = useToggleFavorite('wines', [])
  const [wineRecs, setWineRecs, getWinePairing] = useApi('wineRecs', [])
  const [search, setSearch, isDisabled] = useSearchForm()
  const [recentSearch, setRecentSearch] = useLocalStorage('recentSearch', [])
  const [allDishPairings, setAllDishPairings] = useLocalStorage('dishPairings', [])
  const [dishPairing, setDishPairing] = useState({})

  useEffect(() => {
    getAllDishPairings()
  }, [])

  return (
    <Grid>
      <Header title="Vinz" subtitle={pages[currentPage].subtitle} />
      <Main>
        <Switch>
          <Route path="/wine-storage">
            <WineStorage savedWines={savedWines} onFavToggle={toggleFavStatus} />
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
                value={search}
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
                value={search}
              />
            </SearchForm>
          </Route>
          <Route exact path="/">
            <NavLink to="/search/wine">Find a wine</NavLink>
            <NavLink to="/search/dish">Find a dish</NavLink>
          </Route>
        </Switch>
      </Main>
      <Navigation pages={pages} currentPage={currentPage} onNavigate={setCurrentPage} />
    </Grid>
  )

  function getAllDishPairings() {
    getDishPairing().then(data => setAllDishPairings([...data]))
  }

  function handleSearchRecs(event) {
    event.preventDefault()
    const form = event.target
    const { searchInput } = form.elements
    setRecentSearch(searchInput.value)
    setCurrentPage(2)
    return setWineRecs(getWinePairing(searchInput.value))
  }

  function handleSearchDish(event) {
    event.preventDefault()
    const form = event.target
    const { searchInput } = form.elements
    setRecentSearch(searchInput.value)

    function checkIsInDatabase() {
      const filteredList = allDishPairings.filter(pairing => pairing.wine_type === recentSearch)

      if (filteredList[0] && filteredList[0].length >= 1) {
        return setDishPairing([filteredList[0]])
      } else {
        return getDishPairingApi(recentSearch)
          .then(data => setDishPairing(data))
          .then(history.push('/dish-pairing'))
      }
    }

    return checkIsInDatabase(recentSearch)
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
  background: no-repeat var(--color-background) right bottom url(${quarterCircle});
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
