import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import useDishPairing from 'hooks/useDishPairing'

DishPairing.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.string,
  averageRating: PropTypes.number,
  ratingCount: PropTypes.number,
  score: PropTypes.number,
  link: PropTypes.string,
}

export default function DishPairing(...props) {
  const { wineType } = useParams()
  const [isLoading, error, pairingData, isFetching] = useDishPairing(wineType)

  if (isLoading) {
    return 'Is loading ...'
  } else if (isFetching) {
    return 'Updating ...'
  } else if (error || pairingData?.error) {
    return `Oops, this should't happen ... 😬 ${
      pairingData.error.message === undefined
        ? 'Wine not found'
        : 'Error: ' + pairingData.error.message
    }`
  } else {
    return
  }
}
