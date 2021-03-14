import styled from 'styled-components'
import Header from 'components/Header/Header'
import { recommendedWines } from 'data/wine_recommendations_malbec.json'
import WineListing from 'components/WineListing/WineListing'
import { useState } from 'react'

export default function App() {
  const [savedWines, setSavedWines] = useState([])
  //console.log(savedWines)
  return (
    <Grid>
      <Header title="Pop &amp; Pour" subtitle="Wine, Dine and Journal" />
      <Main>
        <WineListing
          results={recommendedWines}
          onBookmark={handleSaveWine}
          bookmarkedWines={savedWines}
        />
      </Main>
    </Grid>
  )

  function handleSaveWine(wine) {
    if (savedWines.some(savedWine => savedWine.id === wine.id)) {
      setSavedWines(savedWines.filter(savedWine => savedWine.id !== wine.id))
    } else {
      setSavedWines([...savedWines, wine])
    }
  }
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
  background: linear-gradient(
    145deg,
    var(--color-secondary) 18%,
    var(--color-primary) 100%
  );
  background-position: fixed;
  background: var(--color-background);
  color: white;
`
const Main = styled.main`
  padding: var(--space-medium);
  overflow-y: scroll;
`
