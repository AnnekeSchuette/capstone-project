import styled from 'styled-components/macro'
import { Star, StarOutline } from 'heroicons-react'
import PropTypes from 'prop-types'

Rating.propTypes = {
  ratingScore: PropTypes.number,
  setRatingScore: PropTypes.func,
}
export default function Rating({ ratingScore, setRatingScore, editMode }) {
  const fullStars = [...Array(ratingScore)]
  const emptyStars = [...Array(5 - ratingScore)]

  return (
    <RatingWrapper>
      {fullStars.map((points, index) => (
        <StarButton
          key={index}
          onClick={event => handleRatingToggle(event, index)}
          role="button"
        >
          <Star size="30" />
        </StarButton>
      ))}
      {emptyStars.map((points, index) => (
        <StarButton
          key={index + ratingScore}
          onClick={event => handleRatingToggle(event, index + ratingScore + 1)}
          role="button"
        >
          <StarOutline size="30" />
        </StarButton>
      ))}
    </RatingWrapper>
  )
  function handleRatingToggle(event, value) {
    event.preventDefault()
    if (!editMode) {
      return
    } else {
      return setRatingScore(value)
    }
  }
}

const RatingWrapper = styled.div`
  display: flex;
  gap: var(--space-xxsmall);
  place-content: center;
`

const StarButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  color: var(--color-popstar);

  &:focus {
    outline: none;
    box-shadow: none;
  }
`
