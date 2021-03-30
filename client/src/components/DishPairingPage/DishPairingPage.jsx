import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom'
import useDishPairing from 'hooks/useDishPairing'
import { v4 as uuidv4 } from 'uuid'

DishPairing.propTypes = {
  wine_type: PropTypes.string,
  text: PropTypes.string,
  pairings: PropTypes.array,
}
export default function DishPairing(...props) {
  const history = useHistory()
  const { wineType } = useParams()
  const [isLoading, error, pairingData, isFetching] = useDishPairing(wineType)
  if (!isLoading && !isFetching && !error && !pairingData?.error) {
    return (
      <PairingWrapper {...props}>
        <h3>You can pair "{wineType}" with the following dishes/foods</h3>
        {pairingData?.text}
        <p>Matching dishes:</p>
        <BadgeList>
          {pairingData?.pairings.map(item => (
            <Badge key={uuidv4()}>{item}</Badge>
          ))}
        </BadgeList>
      </PairingWrapper>
    )
  } else if (isLoading) {
    return 'Is loading ...'
  } else if (isFetching) {
    return 'Updating ...'
  } else if (error || pairingData?.error) {
    return `Oops, this should't happen ... 😬 ${
      pairingData.error.message === undefined
        ? 'No pairing available'
        : 'Error: ' + pairingData.error.message
    }`
  } else {
    return history.push('..')
  }
}
const PairingWrapper = styled.div``
const BadgeList = styled.ul`
  display: flex;
  margin: 0 0 var(--space-medium);
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
  color: var(--color-oxford-blue);
  font-size: 0.8em;
`
