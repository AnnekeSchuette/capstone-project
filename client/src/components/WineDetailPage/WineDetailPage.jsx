import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import useWineDetail from 'hooks/useWineDetail'
import quarterCircleGrey from 'assets/quarterCircleGrey.svg'

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
  const { wineId } = useParams()
  const [isLoading, error, currentWineData, isFetching] = useWineDetail(wineId)

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
  } else if (error || currentWineData?.error) {
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
            <ListTerm id={`${currentWineData?.id}-price`}>
              Price (avg):
            </ListTerm>
            <ListDescr
              role="definition"
              aria-labelledby={`${currentWineData?.id}-price`}
            >
              {currentWineData?.price}
            </ListDescr>
          </DescrList>
        </ImageWrapper>
        <Description>
          {currentWineData?.description}
          <br></br>
          <Link to={{ pathname: currentWineData?.link }} target="_blank">
            &raquo; more info
          </Link>
        </Description>

        {props.children}
      </WineWrapper>
    )
  }
}
const WineWrapper = styled.div`
  display: grid;
  grid-gap: var(--space-medium) 0;
  position: relative;
  h3 {
    font-weight: 300;
    font-size: 1.1em;
    margin: 0;
  }
`
const Description = styled.p`
  display: grid;
  a {
    color: #fff;
    text-align: right;
  }
`
const ImageWrapper = styled.div`
  color: var(--color-oxford-blue);
  padding: var(--space-medium);
  border-radius: var(--space-xxsmall);
  box-shadow: 0px 2px 5px #00000070;
  background-position: fixed;
  background: no-repeat var(--color-ghost-white) right 80px
    url(${quarterCircleGrey});
  background-size: cover;
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: var(--space-medium);
  grid-template-columns: 120px auto;
  place-items: end;
  overflow: hidden;
  color: var(--color-oxford-blue);
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
    place-self: start;
  }
`
const DescrList = styled.dl`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-content: start;
  gap: 10px 0;
  line-height: 1;
  padding: 0;
  width: 100%;
`
const ListTerm = styled.dt`
  font-weight: 400;
`
const ListDescr = styled.dd`
  text-align: right;
  margin: 0;
`
