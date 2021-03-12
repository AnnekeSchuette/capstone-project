import WineCard from 'components/WineCard/WineCard'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

export default function WineListing({ results }) {
  const wines = results.map(
    ({ title, description, imageUrl, price, averageRating, ratingCount }) => (
      <WineCard
        key={uuidv4()}
        title={title}
        description={description}
        imageUrl={imageUrl}
        price={price}
        averageRating={averageRating}
        ratingCoun={ratingCount}
      />
    )
  )

  return <WineList>{wines}</WineList>
}
const WineList = styled.div`
  display: grid;
  gap: var(--space-medium);
`
