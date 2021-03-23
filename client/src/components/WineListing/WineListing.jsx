import Button from 'components/Button/Button'
import WineCard from 'components/WineCard/WineCard'
import { useHistory } from 'react-router'
import styled from 'styled-components/macro'

export default function WineListing({
  results,
  savedWines,
  onFavToggle,
  recentSearch,
}) {
  const { push } = useHistory()
  const noResultsMessage =
    results.status &&
    recentSearch !== '' &&
    `Sorry, we couldn't find any matches for "${recentSearch}".😢
    You could try another term or similar dish.`

  const listContent =
    !results.status && results.productMatches !== undefined ? (
      results.productMatches.map(
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
        {noResultsMessage}
        <Button
          buttonText="Back to search"
          iconPos="left"
          onClick={() => push('/')}
        />
      </ListEmptyMessage>
    )

  const pairingText = !results.status && results.pairingText !== '' && (
    <p>{results.pairingText}</p>
  )

  const pairedWines = !results.status && results.pairedWines.length > 0 && (
    <MoreInfoWrap>
      Matching types of wine:
      <BadgeList>
        {results.pairedWines.map(wine => (
          <Badge>{wine}</Badge>
        ))}
      </BadgeList>
    </MoreInfoWrap>
  )

  return (
    <WineList>
      {listContent}
      {pairingText}
      {pairedWines}
    </WineList>
  )
}

const WineList = styled.div`
  display: grid;
  gap: var(--space-medium);
`
const ListEmptyMessage = styled.p`
  text-align: center;
`
const MoreInfoWrap = styled.div`
  padding-bottom: var(space--large);
`
const BadgeList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 2px;
  text-align: center;
  flex-wrap: wrap;
`
const Badge = styled.li`
  flex: 0 1 auto;
  list-style: none;
  padding: 2px 5px;
  margin: 0;
  background: var(--color-candy-pink);
  border-radius: 5px;
  color: var(--color-midnight);
  font-size: 0.8em;
`
