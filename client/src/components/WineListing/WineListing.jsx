import WineCard from 'components/WineCard/WineCard'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'

export default function WineListing({
  results,
  savedWines,
  onFavToggle,
  recentSearch,
}) {
  const isValidResult =
    !results.status && 'productMatches' in results && results.pairingText !== ''

  const noResultsMessage =
    !isValidResult &&
    recentSearch !== '' &&
    `Sorry, we couldn't find any matches for "${recentSearch}".😢
    \n You could try another term or similar dish.`

  const listContent = isValidResult ? (
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
    <ListEmptyMessage>{noResultsMessage}</ListEmptyMessage>
  )

  const pairingText = isValidResult && <p>{results.pairingText}</p>

  const pairedWines = isValidResult && (
    <MoreInfoWrap>
      <p>Matching types of wine:</p>
      <BadgeList>
        {results.pairedWines.map(wine => (
          <Badge key={uuidv4()}>{wine}</Badge>
        ))}
      </BadgeList>
    </MoreInfoWrap>
  )

  return (
    <WineList>
      <h2>{`Your wine recommendation for "${recentSearch}"`}</h2>
      {listContent}
      {pairingText}
      {pairedWines}
    </WineList>
  )
}

const WineList = styled.div`
  display: grid;
  gap: var(--space-small);

  button {
    justify-self: start;
  }
`
const ListEmptyMessage = styled.div`
  text-align: center;
  display: grid;
  gap: var(--space-medium) 0;
`
const MoreInfoWrap = styled.div`
  padding-bottom: var(space--large);
`
const BadgeList = styled.ul`
  display: flex;
  margin: 0 0 var(--space-medium);
  padding: 0;
  gap: 5px;
  text-align: center;
  flex-wrap: wrap;
`
const Badge = styled.li`
  flex: 0 1 auto;
  list-style: none;
  padding: 2px 10px;
  margin: 0;
  background: var(--color-candy-pink);
  border-radius: 5px;
  color: var(--color-oxford-blue);
  font-size: 0.9em;
`
