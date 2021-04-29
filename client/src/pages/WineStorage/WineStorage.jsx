import WineCard from 'components/WineCard/WineCard'
import { Heart } from 'heroicons-react'
import styled from 'styled-components/macro'

export default function WineStorage({ savedWines, onFavToggle }) {
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
          />
        )
      )
    ) : (
      <ListEmptyMessage>
        No wines stored, yet. <br></br> Save wines by clicking the
        <Highlight>
          <Heart size="20" />
        </Highlight>
        icon.
      </ListEmptyMessage>
    )

  return (
    <WineStorageList>
      <h2>Your reserved wines</h2>
      {wines}
    </WineStorageList>
  )
}

const WineStorageList = styled.div`
  display: grid;
  gap: var(--space-large);
`
const ListEmptyMessage = styled.p`
  text-align: center;
  align-items: end;
`
const Highlight = styled.span`
  color: var(--color-popstar);
  padding: 0 var(--space-xxsmall);
`
