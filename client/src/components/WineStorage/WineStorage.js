import WineCard from 'components/WineCard/WineCard'
import styled from 'styled-components/macro'
import useLocalStorage from 'hooks/useLocalStorage'
import { useMemo } from 'react'

export default function WineStorage() {
  const [savedWines, setSavedWines] = useLocalStorage('wines')

  useMemo(() => {
    savedWines === null && setSavedWines([])
  }, [savedWines, setSavedWines])

  const wines =
    savedWines != null
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
            />
          )
        )
      : 'No wines stored, yet'

  return <WineStorageList>{wines}</WineStorageList>
}

const WineStorageList = styled.div`
  display: grid;
  gap: var(--space-medium);
`
