import WineCard from 'components/WineCard/WineCard'
import styled from 'styled-components/macro'

export default function WineListing({ results, savedWines }) {
  const wines =
    results.length > 0
      ? results.map(
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
            />
          )
        )
      : 'No results'

  return <WineList>{wines}</WineList>
}

const WineList = styled.div`
  display: grid;
  gap: var(--space-medium);
`
