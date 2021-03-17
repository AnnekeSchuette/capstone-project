import WineCard from 'components/WineCard/WineCard'
import styled from 'styled-components/macro'

export default function WineListing({ results, onBookmark }) {
  const wines = results.map(
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

  return <WineList>{wines}</WineList>
}

const WineList = styled.div`
  display: grid;
  gap: var(--space-medium);
`
