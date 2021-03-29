import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from 'components/Button/Button'
import { useHistory } from 'react-router'
import useWineDetail from 'hooks/useWineDetail'

WineDetailPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.string,
  averageRating: PropTypes.number,
  ratingCount: PropTypes.number,
  score: PropTypes.number,
  link: PropTypes.string,
}

export default function WineDetailPage(savedWines, onFavToggle, ...props) {
  const [
    clickedWineId,
    setClickedWineId,
    currentWineData,
    setCurrentWineData,
  ] = useWineDetail()

  const {
    id,
    title,
    description,
    imageUrl,
    price,
    averageRating,
    ratingCount,
    score,
    link,
  } = currentWineData

  const history = useHistory()

  const averageRatingDecimal = averageRating
    ? (averageRating * 10).toFixed(1)
    : 'n.a.'
  const scoreDecimal = score ? (score * 10).toFixed(1) : 'n.a.'
  const largeImageUrl = imageUrl && imageUrl.replace('312x231', '636x393')

  return (
    <WineWrapper {...props}>
      <h3>{title}</h3>
      <ImageWrapper>
        <Figure>
          <img src={largeImageUrl} alt="" />
        </Figure>
      </ImageWrapper>
      <p>{description}</p>
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
      <Button buttonText="" iconPos="left" onClick={() => history.goBack()} />
      {props.children}
    </WineWrapper>
  )
}
const WineWrapper = styled.div`
  display: grid;
  grid-gap: var(--space-medium) 0;
  position: relative;
`
const ImageWrapper = styled.div`
  background: var(--color-ghost-white);
  padding: var(--space-small) var(--space-medium) var(--space-small) 0;
  height: 100%;
  width: 100%;
`
const Figure = styled.figure`
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
