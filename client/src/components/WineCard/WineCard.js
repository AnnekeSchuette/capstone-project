import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import truncateByWords from 'lib/truncateByWords'
import { Bookmark } from 'heroicons-react'
import { useBookmark } from 'lib/customHooks'

WineCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.string,
  averageRating: PropTypes.number,
  ratingCount: PropTypes.number,
  score: PropTypes.number,
}

export default function WineCard({
  id,
  title,
  description,
  imageUrl,
  price = 'n.a.',
  averageRating,
  score,
  onBookmark,
}) {
  const [toggleState, { toggle }] = useBookmark()

  const shortDescription = description && truncateByWords(description, 12)
  const averageRatingDecimal = averageRating
    ? (averageRating * 10).toFixed(1)
    : 'n.a.'
  const scoreDecimal = score ? (score * 10).toFixed(1) : 'n.a.'
  const largeImageUrl = imageUrl && imageUrl.replace('312x231', '636x393')

  return (
    <CardContent>
      <BookmarkButton
        onClick={() => handleBookmarkClick({ id, title })}
        isActive={toggleState}
      >
        <Bookmark size={34} />
      </BookmarkButton>
      <ImgWrapper>
        <img src={largeImageUrl} alt="" />
      </ImgWrapper>
      <CardInfo>
        <h3>{title}</h3>
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

  function handleBookmarkClick(currentWine) {
    toggle()
    onBookmark(currentWine)
  }
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
  grid-auto-flow: column;
  place-items: center;

  h3 {
    font-weight: 400;
    font-size: 1.1em;
    margin: 0;
  }
`
const BookmarkButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: 5px;
  top: -8px;
  svg {
    fill: ${props =>
      props.isActive ? 'var(--color-pink-pantone)' : 'var(--color-midnight)'};
    stroke: 1px
      ${props =>
        props.isActive ? 'var(--color-midnight)' : 'var(--color-pink-pantone)'};
  }
`
const CardInfo = styled.div`
  background: #04135e08;
  padding: var(--space-medium) var(--space-medium) var(--space-small);
  height: 100%;
  width: 100%;
`
const ImgWrapper = styled.figure`
  width: 100%;
  margin: 0;
  justify-self: center;
  text-align: center;

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
