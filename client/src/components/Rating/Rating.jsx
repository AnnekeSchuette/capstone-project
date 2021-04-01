import styled from 'styled-components/macro'
import { Star, StarOutline } from 'heroicons-react'
import PropTypes from 'prop-types'

Rating.propTypes = {
  ratingScore: PropTypes.number,
  setRatingScore: PropTypes.func,
}
export default function Rating({
  ratingScore = 0,
  setRatingScore,
  isDisabled = true,
}) {
  const fullStars = [...Array(ratingScore)]
  const emptyStars = [...Array(5 - ratingScore)]

  return (
    <RatingWrapper>
      {fullStars.map((points, index) => (
        <StarButton
          key={index}
          onClick={() => setRatingScore(index)}
          disabled={isDisabled}
        >
          <Star size="30" />
        </StarButton>
      ))}
      {emptyStars.map((points, index) => (
        <StarButton
          key={index + ratingScore}
          onClick={() => setRatingScore(index + ratingScore + 1)}
          disabled={isDisabled}
        >
          <StarOutline size="30" />
        </StarButton>
      ))}
    </RatingWrapper>
  )
}

const RatingWrapper = styled.div`
  display: flex;
  gap: var(--space-small);
  place-content: center;
`

const StarButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  color: var(--color-popstar);
`
