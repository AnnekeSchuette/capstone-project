import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { capitalize } from 'lib/capitalizeString'
import { EmojiSadOutline } from 'heroicons-react'
import { useParams } from 'react-router-dom'
import StatusMessage from 'components/StatusMessage/StatusMessage'
import useDishPairing from 'hooks/useDishPairing'
import { v4 as uuidv4 } from 'uuid'

DishPairing.propTypes = {
  wine_type: PropTypes.string,
  text: PropTypes.string,
  pairings: PropTypes.array,
}
export default function DishPairing(...props) {
  const { wineType } = useParams()
  const [isLoading, error, pairingData, isFetching] = useDishPairing(wineType)
  const capitalizedWineType = capitalize(wineType)

  if (isLoading) {
    return <StatusMessage>Is loading ...</StatusMessage>
  }
  if (isFetching) {
    return <StatusMessage>Updating ...</StatusMessage>
  }
  if (error) {
    return (
      <StatusMessage>
        Oops, this should't happen ... 😬
        {'Error: ' + pairingData.error.message}
      </StatusMessage>
    )
  }
  if (pairingData.pairings.length < 1 || pairingData?.error) {
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

      <BadgeList>
        {pairingData?.pairings.map(item => (
          <Badge key={uuidv4()}>{item}</Badge>
        ))}
      </BadgeList>
      <WineTypeInfo>
        <h4>About {capitalizedWineType}</h4>
        <p>{pairingData?.text}</p>
      </WineTypeInfo>
    </PairingWrapper>
  )
}
const PairingWrapper = styled.div`
  display: grid;
  gap: var(--space-large);
`
const WineTypeInfo = styled.article`
  h4 {
    font-weight: 400;
    margin-bottom: var(--space-small);
  }
`

const BadgeList = styled.ul`
  display: flex;
  margin: 0;
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

const Highlight = styled.span`
  color: var(--color-popstar);
  font-style: italic;
`
