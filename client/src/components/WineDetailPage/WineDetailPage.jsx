import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Button from 'components/Button/Button'
import { useHistory, useParams } from 'react-router'
import { useQuery } from 'react-query'
import getWinebyId from 'services/getWineById'

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

export default function WineDetailPage(...props) {
  const history = useHistory()
  const { wineId } = useParams()
  const {
    isLoading,
    error,
    data: currentWineData,
    isFetching,
  } = useQuery('currentWineData', () => getWinebyId(wineId))

  const averageRatingDecimal = currentWineData?.averageRating
    ? (currentWineData?.averageRating * 10).toFixed(1)
    : 'n.a.'
  const scoreDecimal = currentWineData?.score
    ? (currentWineData?.score * 10).toFixed(1)
    : 'n.a.'
  const largeImageUrl =
    currentWineData?.imageUrl &&
    currentWineData?.imageUrl.replace('312x231', '636x393')

  if (isLoading) {
    return 'Is loading ...'
  } else if (isFetching) {
    return 'Updating ...'
  } else if (currentWineData?.error) {
    return `Oops, this should't happen ... 😬 ${
      currentWineData.error.message === undefined
        ? 'Wine not found'
        : 'Error: ' + currentWineData.error.message
    }`
  } else {
    return (
      <WineWrapper {...props}>
        <h3>{currentWineData?.title}</h3>
        <ImageWrapper>
          <Figure>
            <img src={largeImageUrl} alt="" />
          </Figure>
        </ImageWrapper>
        <p>{currentWineData?.description}</p>
        <DescrList>
          <ListTerm id={`${currentWineData?.id}-rating`}>Rating:</ListTerm>
          <ListDescr
            role="definition"
            aria-labelledby={`${currentWineData?.id}-rating`}
          >
            {averageRatingDecimal}
            <br></br>
            <small>{currentWineData?.ratingCount} ratings</small>
          </ListDescr>
          <ListTerm id={`${currentWineData?.id}-score`}>Score:</ListTerm>
          <ListDescr
            role="definition"
            aria-labelledby={`${currentWineData?.id}-score`}
          >
            {scoreDecimal}
          </ListDescr>
          <ListTerm id={`${currentWineData?.id}-price`}>Price (avg):</ListTerm>
          <ListDescr
            role="definition"
            aria-labelledby={`${currentWineData?.id}-price`}
          >
            {currentWineData?.price}
          </ListDescr>
        </DescrList>
        {props.children}
      </WineWrapper>
    )
  }
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
