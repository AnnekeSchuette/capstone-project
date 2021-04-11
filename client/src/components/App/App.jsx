import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import quarterCircle from 'assets/quarterCircle.svg'
import Header from 'components/Header/Header'
import Navigation from 'components/Navigation/Navigation'
import SearchDishForm from 'components/SearchDishForm/SearchDishForm'
import SearchWineForm from 'components/SearchWineForm/SearchWineForm'
import WineRecPage from 'pages/WineRecPage/WineRecPage'
import WineDetailPage from 'pages/WineDetailPage/WineDetailPage'
import WineStorage from 'pages/WineStorage/WineStorage'
import JournalPage from 'pages/JournalPage/JournalPage'
import ReceptionPage from 'pages/ReceptionPage'
import DishPairingPage from 'pages/DishPairingPage/DishPairingPage'
import usePageInfo from 'hooks/usePageInfo'
import useToggleFavorite from 'hooks/useToggleFavorite'

export default function App() {
  const [currentPage, setCurrentPage, pages] = usePageInfo('/')
  const currentSubtitle = pages
    .filter(page => currentPage === page.path)
    .map(page => page.subtitle)
    .toString()

  const [savedWines, toggleFavStatus] = useToggleFavorite('wines', [])

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
            <WineDetailPage
              user={user}
              savedWines={savedWines}
              onFavToggle={toggleFavStatus}
            />
          </Route>
          <Route exact path={`/dish-pairing/result/:wineType`}>
            <DishPairingPage />
          </Route>
          <Route exact path="/wine/recommendation/:queryWineSearch">
            <WineRecPage
              onFavToggle={toggleFavStatus}
              savedWines={savedWines}
            />
          </Route>
          <Route exact path="/dish-pairing">
            <SearchDishForm />
          </Route>
          <Route exact path="/wine">
            <SearchWineForm />
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
