import WineCard from 'components/WineCard/WineCard'
import styled from 'styled-components/macro'

export default function WineStorage({ savedWines, onBookmark }) {
  /* const savedWinesData = getWinesById(savedWines) */

  const wines =
    savedWines.length > 0
      ? savedWines.map(
          ({
            id,
            title,
            description,
            imageUrl,
            price,
            averageRating,
            ratingCount,
            score,
          }) => (
            <WineCard
              id={id}
              key={id}
              title={title}
              description={description}
              imageUrl={imageUrl}
              price={price}
              averageRating={averageRating}
              ratingCount={ratingCount}
              score={score}
              onBookmark={onBookmark}
            />
          )
        )
      : 'No wines stored, yet'

  /* function getWinesById(savedWines) {
    savedWines.map(({ id }) => wineDatabase.filter(wine => wine.id === id))
  } */
  return <WineStorageList>{wines}</WineStorageList>
}

const WineStorageList = styled.div`
  display: grid;
  gap: var(--space-medium);
`
