import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import truncateByWords from 'lib/truncateByWords'
import { Heart } from 'heroicons-react'
import { Link } from 'react-router-dom'

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
      <h3>{title}</h3>
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
      <ImgWrapper>
        <img src={largeImageUrl} alt="" />
      </ImgWrapper>
      <CardInfo>
        <p>{shortDescription}</p>
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
        <p>
          <Link
            exact
            to={{
              pathname: `/wine/${id}`,
            }}
          >
            Show details
          </Link>
        </p>
      </CardInfo>
    </CardContent>
  )
}

const CardContent = styled.div`
  background: var(--color-midnight-blue-light);
  box-shadow: 0px 1px 4px #00000050;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 180px auto;
  place-items: end;
  overflow: hidden;
  color: var(--color-oxford-blue);
  font-size: 0.9em;
  position: relative;

  h3 {
    background: var(--color-midnight-blue-light);
    font-weight: 400;
    font-size: 1em;
    margin: 0;
    grid-column-end: span 2;
    width: 100%;
    align-content: center;
    padding: var(--space-xsmall) var(--space-xlarge) var(--space-xsmall)
      var(--space-small);
  }
`
const ToggleFavButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 5px;
  top: 7px;
  box-shadow: none !important;
  z-index: 2;

  svg {
    fill: ${props =>
      props.isActive ? 'var(--color-candy-pink)' : 'var(--color-cadet-grey)'};
    stroke: 2px
      ${props =>
        props.isActive ? 'var(--color-cadet-grey)' : 'var(--color-candy-pink)'};
  }
`

const CardInfo = styled.div`
  padding: var(--space-medium) var(--space-medium) var(--space-xsmall);
  height: 100%;
  width: 100%;

  p > a {
    display: grid;
    justify-content: right;
  }
`

const ImgWrapper = styled.figure`
  display: grid;
  width: 100%;
  height: 100%;
  margin: 0;
  background: #fff;
  padding: var(--space-xsmall) 0 var(--space-small) var(--space-medium);
  align-items: center;
  justify-items: center;
  -o-object-fit: cover;
  object-fit: cover;
  -webkit-clip-path: polygon(0 100%, 0% 0%, 100% 0%, 70% 100%, 100% 100%);
  clip-path: polygon(0 100%, 0% 0%, 100% 0%, 70% 100%, 100% 100%);

  img {
    max-width: 100%;
    padding-right: 35%;
    max-height: 190px;
    height: auto;
    mix-blend-mode: multiply;
  }
`
const DescrList = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-content: start;
  gap: var(--space-xsmall) 0;
  line-height: 1;
  padding: var(--space-xsmall) 0;
`
const ListTerm = styled.dt`
  font-weight: 400;
`
const ListDescr = styled.dd`
  text-align: right;
`
