import WineCard from 'components/WineCard/WineCard'
import styled from 'styled-components/macro'

export default function WineListing({ results, savedWines, onFavToggle }) {
  const wines = results.productMatches ? (
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
    <ListEmptyMessage>No results. 😢</ListEmptyMessage>
  )

  return (
    <>
      <WineList>
        {wines}
        {results.pairingText !== '' && <p>{results.pairingText}</p>}

        {results.pairedWines.length > 0 && (
          <MoreInfoWrap>
            Matching types of wine:
            <BadgeList>
              {results.pairedWines.map(wine => (
                <Badge>{wine}</Badge>
              ))}
            </BadgeList>
          </MoreInfoWrap>
        )}
      </WineList>
    </>
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
