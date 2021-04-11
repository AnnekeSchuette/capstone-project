import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { EmojiSadOutline } from 'heroicons-react'
import { capitalize } from 'lib/capitalizeString'
import StatusMessage from 'components/StatusMessage/StatusMessage'
import BadgeList from 'components/BadgeList/BadgeList'
import WineCard from 'components/WineCard/WineCard'
import useWineRecommendations from 'hooks/useWineRecommendations'
import PuffLoader from 'react-spinners/PuffLoader'

WineListing.propTypes = {
  savedWines: PropTypes.arrayOf(PropTypes.object),
  onFavToggle: PropTypes.func,
  recentSearch: PropTypes.string,
}

export default function WineListing({ savedWines, onFavToggle, recentSearch }) {
  const { queryWineSearch } = useParams()
  const [
    isLoading,
    error,
    wineRecommendation,
    isFetching,
  ] = useWineRecommendations(queryWineSearch)

  if (isLoading) {
    return (
      <StatusMessage>
        Is loading ...
        <PuffLoader color="#b84a62" loading="true" size={150} />
      </StatusMessage>
    )
  }
  if (isFetching) {
    return (
      <StatusMessage>
        Updating ...
        <PuffLoader color="#b84a62" loading="true" size={150} />
      </StatusMessage>
    )
  }

  if (error || wineRecommendation.error) {
    return (
      <StatusMessage>
        Oops, this should't happen ... 😬
        {wineRecommendation.error.message === undefined
          ? 'No pairing wine found'
          : 'Error: ' + wineRecommendation.error.message}
      </StatusMessage>
    )
  }
  const capitalizedSearchString = capitalize(recentSearch)
  const isValidResult =
    !wineRecommendation.status &&
    'productMatches' in wineRecommendation &&
    wineRecommendation.pairingText !== ''

  const noResultsMessage = !isValidResult && recentSearch !== '' && (
    <StatusMessage>
      <p>
        Sorry, we couldn't find any matches for "{capitalizedSearchString}".
      </p>
      <p>
        <EmojiSadOutline size="64" />
      </p>
      You could try another term or similar dish.
    </StatusMessage>
  )

  const listContent = isValidResult ? (
    wineRecommendation.productMatches.map(
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
    <StatusMessage>{noResultsMessage}</StatusMessage>
  )

  const pairingText = isValidResult && <p>{wineRecommendation.pairingText}</p>

  const pairedWines = isValidResult && (
    <div>
      <p>Matching types of wine:</p>
      <BadgeList data={wineRecommendation.pairedWines} />
    </div>
  )

  return (
    <WineList>
      {isValidResult && (
        <h3>{`Your wine recommendation for "${capitalizedSearchString}"`}</h3>
      )}
      {listContent}
      {pairedWines}
      {pairingText}
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
