import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'

BadgeList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  justify: PropTypes.bool,
}

export default function BadgeList({ data, justify = false }) {
  return (
    <BadgeListing justify={justify}>
      {data.map(item => (
        <Badge key={uuidv4()}>{item}</Badge>
      ))}
    </BadgeListing>
  )
}

const BadgeListing = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 5px;
  text-align: center;
  flex-wrap: wrap;
  justify-content: ${props => (props.justify ? 'center' : 'left')};
`
const Badge = styled.li`
  flex: 0 1 auto;
  list-style: none;
  padding: 2px 10px;
  margin: 0;
  background: var(--color-candy-pink);
  border-radius: 5px;
  color: var(--color-oxford-blue);
  font-size: 0.9em;
`
