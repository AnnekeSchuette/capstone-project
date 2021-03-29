import WineCard from 'components/WineCard/WineCard'
import styled from 'styled-components/macro'

export default function WineStorage({ savedWines, onFavToggle, onShowDetail }) {
  const wines =
    savedWines.length > 0 ? (
      savedWines.map(
        ({
          id,
          title,
          description,
          imageUrl,
          price,
          averageRating,
          ratingCount,
          score,
          link,
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
            link={link}
            savedWines={savedWines}
            onFavToggle={onFavToggle}
            onShowDetail={onShowDetail}
          />
        )
      )
    ) : (
      <ListEmptyMessage>No wines stored, yet</ListEmptyMessage>
    )

  return <WineStorageList>{wines}</WineStorageList>
}

const WineStorageList = styled.div`
  display: grid;
  gap: var(--space-medium);
`
const ListEmptyMessage = styled.p`
  text-align: center;
`
