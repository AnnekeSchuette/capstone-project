import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useParams, useHistory } from 'react-router-dom'
import useDishPairing from 'hooks/useDishPairing'
import { v4 as uuidv4 } from 'uuid'
import { useQuery } from 'react-query'
import getDishPairingApi from 'services/getDishPairingApi'
import { render } from 'react-dom'

DishPairing.propTypes = {
  wine_type: PropTypes.string,
  text: PropTypes.string,
  pairings: PropTypes.array,
}
export default function DishPairing(...props) {
  const history = useHistory()
  const { wineType } = useParams()
  /* const [isLoading, error, pairingData, isFetching] = useDishPairing(wineType) */

  const {
    isLoading,
    error,
    data: pairingData,
    isFetching,
  } = useQuery('pairingData', () => getDishPairingApi(wineType))

  if (pairingData !== undefined && pairingData.pairings === '[]') {
    return (
      <PairingWrapper {...props}>
        <h3>
          You can pair <Highlight>{wineType}</Highlight> with the following
          dishes/foods
        </h3>
        {pairingData?.text}
        <div>
          {' '}
          <p>Matching dishes:</p>
          <BadgeList>
            {pairingData?.pairings.map(item => (
              <Badge key={uuidv4()}>{item}</Badge>
            ))}
          </BadgeList>
        </div>
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
    return (
      <div>
        Unfortunately there is no pairing available for
        {<Highlight> {wineType} </Highlight>}
      </div>
    )
  }
}
const PairingWrapper = styled.div`
  display: grid;
  gap: var(--space-large);
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

const Highlight = styled.span`
  color: var(--color-popstar);
  font-style: italic;
`
