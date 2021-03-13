import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import truncateByWords from 'lib/truncateByWords'

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
  title,
  description,
  imageUrl,
  price,
  averageRating,
  score,
}) {
  const shortDescription = truncateByWords(description, 20)
  const averageRatingDecimal = averageRating
    ? (averageRating * 10).toFixed(1)
    : 'n.a.'
  const scoreDecimal = score ? (score * 10).toFixed(1) : 'n.a.'
  const largeImageUrl = imageUrl.replace('312x231', '636x393')
  console.log(score)
  return (
    <CardContent>
      <h2>{title}</h2>
      <ImgWrapper>
        <img src={largeImageUrl} alt="" />
        <DescrList>
          <ListTerm>Price (avg):</ListTerm>
          <ListDescr>{price}</ListDescr>
          <ListTerm>Rating:</ListTerm>
          <ListDescr>{averageRatingDecimal}</ListDescr>
          <ListTerm>Score:</ListTerm>
          <ListDescr>{scoreDecimal}</ListDescr>
        </DescrList>
      </ImgWrapper>
      <InfoWrapper>
        <Descr>{shortDescription}</Descr>
      </InfoWrapper>
    </CardContent>
  )
}

const CardContent = styled.div`
  background: #fff;
  box-shadow: 0px 1px 4px #00000050;
  color: var(--color-space-cadet);
  border-radius: 5px;
  font-size: 0.8em;
  padding: 0 var(--space-small) var(--space-small);
  display: grid;
  gap: var(--space-xsmall);

  h2 {
    font-weight: 400;
  }
`
const InfoWrapper = styled.div``
const Descr = styled.p`
  margin: 0 0 0 var(--space-xsmall);
`
const ImgWrapper = styled.figure`
  width: 100%;
  margin: 0;
  overflow: wrap;
  display: grid;
  gap: var(--space-small);
  grid-template-columns: 100px auto;

  img {
    max-width: 100%;
    max-height: 180px;
    height: auto;
    justify-self: center;
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
