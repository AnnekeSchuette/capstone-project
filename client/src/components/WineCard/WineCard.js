import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import truncateByWords from 'lib/truncateByWords'
import { Heart } from 'heroicons-react'
import { useState, useEffect } from 'react'
import useLocalStorage from 'hooks/useLocalStorage'

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
  score,
  link,
}) {
  const [savedWines, setSavedWines] = useLocalStorage('wines', [])
  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    toggleIsSaved(id)
  }, [savedWines, id])

  useEffect(() => {
    console.log(savedWines, isSaved)
  }, [savedWines, isSaved])

  function toggleIsSaved(currentWine) {
    if (savedWines.some(savedWine => savedWine.id === currentWine.id)) {
      setIsSaved(true)
    } else {
      setIsSaved(false)
    }
  }

  function handleClick(currentWine) {
    let newWineArray = isSaved
      ? savedWines.filter(s => s.id !== currentWine.id)
      : [...savedWines, currentWine]
    setSavedWines(newWineArray)
  }

  const shortDescription = description && truncateByWords(description, 12)
  const averageRatingDecimal = averageRating
    ? (averageRating * 10).toFixed(1)
    : 'n.a.'
  const scoreDecimal = score ? (score * 10).toFixed(1) : 'n.a.'
  const largeImageUrl = imageUrl && imageUrl.replace('312x231', '636x393')

  return (
    <CardContent>
      <h3>{title}</h3>
      <BookmarkButton
        onClick={() =>
          handleClick({
            id,
            title,
            description,
            imageUrl,
            price,
            averageRating,
            score,
            link,
          })
        }
        role="switch"
        isActive={isSaved}
        aria-checked={isSaved}
        aria-label={
          isSaved ? 'Remove from wine storage' : 'Put in wine storage'
        }
      >
        <Heart size={34} />
      </BookmarkButton>
      <ImgWrapper>
        <img src={largeImageUrl} alt="" />
      </ImgWrapper>
      <CardInfo>
        <p>{shortDescription}</p>
        <DescrList>
          <ListTerm id={`${id}-price`}>Price (avg):</ListTerm>
          <ListDescr role="definition" aria-labelledby={`${id}-price`}>
            {price}
          </ListDescr>
          <ListTerm id={`${id}-rating`}>Rating:</ListTerm>
          <ListDescr role="definition" aria-labelledby={`${id}-rating`}>
            {averageRatingDecimal}
          </ListDescr>
          <ListTerm id={`${id}-score`}>Score:</ListTerm>
          <ListDescr role="definition" aria-labelledby={`${id}-score`}>
            {scoreDecimal}
          </ListDescr>
        </DescrList>
      </CardInfo>
    </CardContent>
  )
}

const CardContent = styled.div`
  background: #fff;
  box-shadow: 0px 1px 4px #00000030;
  color: var(--color-midnight);
  border-radius: var(--space-small);
  font-size: 0.75em;
  display: grid;
  gap: var(--space-xsmall);
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
const BookmarkButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 5px;
  top: 7px;

  svg {
    fill: ${props =>
      props.isActive ? 'var(--color-pink-pantone)' : 'inherit'};
    stroke: 2px
      ${props =>
        props.isActive ? 'var(--color-midnight)' : 'var(--color-pink-pantone)'};
  }
`
const CardInfo = styled.div`
  background: #fff;
  padding: var(--space-small) var(--space-medium) var(--space-small)
    var(--space-small);
  height: 100%;
  width: 100%;
`
const ImgWrapper = styled.figure`
  width: 100%;
  margin: 0;
  justify-self: center;
  text-align: center;
  padding: var(--space-xsmall) 0;

  img {
    max-width: 100%;
    max-height: 180px;
    height: auto;
  }
`
const DescrList = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-content: start;
  font-size: 0.9em;
`
const ListTerm = styled.dt`
  font-weight: 400;
`
const ListDescr = styled.dd`
  text-align: right;
`
