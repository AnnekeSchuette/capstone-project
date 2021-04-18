import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { capitalize } from 'lib/capitalizeString'
import { EmojiSadOutline } from 'heroicons-react'
import { useParams } from 'react-router-dom'
import BadgeList from 'components/BadgeList/BadgeList'
import StatusMessage from 'components/StatusMessage/StatusMessage'
import useDishPairing from 'hooks/useDishPairing'
import PuffLoader from 'react-spinners/PuffLoader'

DishPairing.propTypes = {
  wine_type: PropTypes.string,
  text: PropTypes.string,
  pairings: PropTypes.arrayOf(PropTypes.string),
}
export default function DishPairing(...props) {
  const { wineType } = useParams()
  const [isLoading, error, pairingData, isFetching] = useDishPairing(wineType)
  const capitalizedWineType = capitalize(wineType)

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
  if (error) {
    return (
      <StatusMessage>
        Oops, this should't happen ... 😬
        {'Error: ' + pairingData.error.message}
      </StatusMessage>
    )
  }
  if (
    pairingData?.pairings.length < 1 ||
    pairingData === null ||
    pairingData?.error
  ) {
    return (
      <StatusMessage>
        <p>
          Unfortunately, we can't find pairing dishes for
          {<Highlight> {capitalizedWineType} </Highlight>} at the moment
        </p>
        <p>
          <EmojiSadOutline size="64" />
        </p>
      </StatusMessage>
    )
  }
  return (
    <PairingWrapper {...props}>
      <h3>
        You can pair <Highlight>{capitalizedWineType}</Highlight> with the
        following dishes/foods
      </h3>

      <BadgeList data={pairingData?.pairings} justify />
      <WineTypeInfo>
        <h4>About {capitalizedWineType}</h4>
        <p>{pairingData?.text}</p>
      </WineTypeInfo>
    </PairingWrapper>
  )
}
const PairingWrapper = styled.div`
  display: grid;
  gap: var(--space-xlarge);
`
const WineTypeInfo = styled.article`
  text-align: center;
  h4 {
    font-weight: 400;
    margin-bottom: var(--space-small);
  }
`
const Highlight = styled.span`
  color: var(--color-popstar);
  font-style: italic;
`
