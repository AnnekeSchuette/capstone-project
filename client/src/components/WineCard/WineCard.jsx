import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import truncateByWords from 'lib/truncateByWords'
import { Heart } from 'heroicons-react'
import { Link, Route } from 'react-router-dom'

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
  onShowDetail,
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
        <Route exact path="/wine-storage">
          <Link to={`/wine/${id}`} onClick={() => onShowDetail(id)}>
            Show details
          </Link>
        </Route>
      </CardInfo>
    </CardContent>
  )
}

const CardContent = styled.div`
  background: var(--color-ghost-white);
  box-shadow: 0px 1px 4px #00000030;
  color: var(--color-midnight);
  border-radius: var(--space-xxsmall);
  font-size: 0.75em;
  display: grid;
  gap: 0 var(--space-medium);
  position: relative;
  grid-template-columns: 90px auto;
  grid-template-rows: auto auto;
  grid-auto-flow: column;
  place-items: center;
  overflow: hidden;

  h3 {
    font-weight: 400;
    font-size: 1.1em;
    margin: 0;
    grid-column-end: span 2;
    width: 100%;
    align-content: center;
    padding: var(--space-small) var(--space-xlarge) var(--space-small)
      var(--space-small);
    background: var(--color-midnight-punch-light);
  }
`
const ToggleFavButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 5px;
  top: 7px;
  box-shadow: none !important;

  svg {
    fill: ${props =>
      props.isActive ? 'var(--color-candy-pink)' : 'var(--color-cadet-grey)'};
    stroke: 2px
      ${props =>
        props.isActive ? 'var(--color-cadet-grey)' : 'var(--color-candy-pink)'};
  }
`
const CardInfo = styled.div`
  background: var(--color-ghost-white);
  padding: var(--space-small) var(--space-medium) var(--space-small) 0;
  height: 100%;
  width: 100%;
`
const ImgWrapper = styled.figure`
  width: 100%;
  margin: 0;
  justify-self: center;
  text-align: center;
  padding: var(--space-xsmall) 0 var(--space-xsmall) var(--space-medium);

  img {
    max-width: 100%;
    max-height: 190px;
    height: auto;
    mix-blend-mode: multiply;
  }
`
const DescrList = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-content: start;
  font-size: 0.9em;
  gap: 10px 0;
  line-height: 1;
  margin-top: var(--space-small);
`
const ListTerm = styled.dt`
  font-weight: 400;
`
const ListDescr = styled.dd`
  text-align: right;
`
