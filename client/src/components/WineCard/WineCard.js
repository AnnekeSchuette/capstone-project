import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

WineCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.string,
  averageRating: PropTypes.number,
  ratingCount: PropTypes.number,
}

export default function WineCard({
  title,
  description,
  imageUrl,
  price,
  averageRating,
  ratingCount,
}) {
  return (
    <WineCardContent>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt="" />
      <DescrList>
        <ListTerm>Price (avg):</ListTerm>
        <ListDescr>{price}</ListDescr>
        <ListTerm>Rating:</ListTerm>
        <ListDescr>{averageRating}</ListDescr>
        <ListTerm>Rating Count:</ListTerm>
        <ListDescr>{ratingCount}</ListDescr>
      </DescrList>
    </WineCardContent>
  )
}

const WineCardContent = styled.div`
  background: #faf5ff;
  box-shadow: 2px 2px 0px #00000050;
  color: var(--color-primary);
`
const DescrList = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const ListTerm = styled.dt`
  font-weight: bold;
`
const ListDescr = styled.dd``
