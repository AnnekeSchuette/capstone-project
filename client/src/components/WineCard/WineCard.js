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
}

export default function WineCard({
  title,
  description,
  imageUrl,
  price,
  averageRating,
  ratingCount,
}) {
  const shortDescription = truncateByWords(description, 20)

  return (
    <WineCardContent>
      <h2>{title}</h2>
      <WineImg>
        <img src={imageUrl} alt="" />
      </WineImg>
      <WineDescr>{shortDescription}</WineDescr>
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
  background: #eae9ec;
  box-shadow: 2px 2px 0px #00000050;
  color: var(--color-space-cadet);
  display: grid;
  grid-gap: var(--space-small);
  padding: var(--space-medium);
  border-radius: 5px;
  place-content: center;
`
const WineDescr = styled.p`
  column-width: 50%;
`
const WineImg = styled.figure`
  column-width: 50%;
  height: auto;
`
const DescrList = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
const ListTerm = styled.dt`
  font-weight: bold;
`
const ListDescr = styled.dd``
