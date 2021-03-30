import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import truncateByWords from 'lib/truncateByWords'
import { Heart } from 'heroicons-react'
import { Link } from 'react-router-dom'
import quarterCircleWhite from 'assets/quarterCircleWhite.svg'

WineCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.string,
  averageRating: PropTypes.number,
  ratingCount: PropTypes.number,
  score: PropTypes.number,
  link: PropTypes.string,
}

export default function WineCard({
  id,
  title,
  description,
  imageUrl,
  price = 'n.a.',
  averageRating,
  ratingCount,
  score,
  link,
  savedWines = [],
  onFavToggle,
}) {
  const currentWine = {
    id,
    title,
    description,
    imageUrl,
    price,
    averageRating,
    ratingCount,
    score,
    link,
  }
  const isSaved = savedWines.some(savedWine => savedWine.id === id)

  const shortDescription = description && truncateByWords(description, 12)
  const averageRatingDecimal = averageRating
    ? (averageRating * 10).toFixed(1)
    : 'n.a.'
  const scoreDecimal = score ? (score * 10).toFixed(1) : 'n.a.'
  const largeImageUrl = imageUrl && imageUrl.replace('312x231', '636x393')

  return (
    <CardContent>
      <ToggleFavButton
        onClick={() => onFavToggle(currentWine)}
        role="switch"
        isActive={isSaved}
        aria-checked={isSaved}
        aria-label={
          isSaved ? 'Remove from wine storage' : 'Put in wine storage'
        }
      >
        <Heart size={34} />
      </ToggleFavButton>
      <Link exact to={{ pathname: `/wine/${id}` }}>
        <h3>{title}</h3>
        <ImageWrapper>
          <DescrList>
            <ListTerm id={`${id}-rating`}>Rating:</ListTerm>
            <ListDescr role="definition" aria-labelledby={`${id}-rating`}>
              {averageRatingDecimal}
              <br></br>
              <small>{ratingCount} ratings</small>
            </ListDescr>
            <ListTerm id={`${id}-score`}>Score:</ListTerm>
            <ListDescr role="definition" aria-labelledby={`${id}-score`}>
              {scoreDecimal}
            </ListDescr>
            <ListTerm id={`${id}-price`}>Price (avg):</ListTerm>
            <ListDescr role="definition" aria-labelledby={`${id}-price`}>
              {price}
            </ListDescr>
          </DescrList>
          <Figure>
            <img src={largeImageUrl} alt="" />
          </Figure>
        </ImageWrapper>
        <Description>{shortDescription}</Description>
      </Link>
    </CardContent>
  )
}

const CardContent = styled.div`
  color: var(--color-oxford-blue);
  padding: var(--space-medium) var(--space-medium);
  border-radius: var(--space-xxsmall);
  box-shadow: 0px 2px 5px #00000070;
  background-position: fixed;
  background: no-repeat var(--color-midnight-blue-light) right 80px
    url(${quarterCircleWhite});
  background-size: cover;
  position: relative;

  a {
    display: grid;
    grid-gap: var(--space-xsmall) 0;
    text-decoration: none;

    h3 {
      font-weight: 300;
      font-size: 1em;
      margin: 0;
      padding-right: 50px;
    }
  }
`
const ToggleFavButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 6px;
  top: 10px;
  box-shadow: none !important;
  z-index: 3;

  svg {
    fill: ${props =>
      props.isActive ? 'var(--color-candy-pink)' : 'var(--color-cadet-grey)'};
    stroke: 2px
      ${props =>
        props.isActive ? 'var(--color-cadet-grey)' : 'var(--color-candy-pink)'};
  }
`

const Description = styled.p`
  display: grid;
  font-size: 0.9em;
  margin: 0;
`
const ImageWrapper = styled.div`
  display: grid;
  grid-gap: var(--space-medium);
  grid-template-columns: 150px auto;
  place-items: end;
  overflow: hidden;
  color: var(--color-oxford-blue);
  padding-bottom: var(--space-small);
`
const Figure = styled.figure`
  width: 100%;
  height: 100%;
  margin: 0;
  display: grid;

  img {
    max-width: 100%;
    max-height: 160px;
    height: auto;
    mix-blend-mode: multiply;
    align-self: center;
    place-self: end;
  }
`
const DescrList = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-content: start;
  gap: 10px 0;
  line-height: 1;
  width: 100%;
`
const ListTerm = styled.dt`
  font-weight: 400;
`
const ListDescr = styled.dd`
  text-align: right;
  margin: 0;
`
