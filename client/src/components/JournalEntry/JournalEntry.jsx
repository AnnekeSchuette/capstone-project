import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Rating from 'components/Rating/Rating'
import { Pencil } from 'heroicons-react'
import Button from 'components/Button/Button'

JournalEntry.propTypes = {
  ratingScore: PropTypes.number,
  personalRating: PropTypes.number,
}
export default function JournalEntry({
  createdAt,
  onEdit,
  ratingScore = 0,
  journalContent = '',
  ...props
}) {
  return (
    <JournalEntryWrapper {...props}>
      <EditButton onClick={() => onEdit(true)}>
        <Pencil size="20" />
      </EditButton>
      <h4>Your personal rating and notes</h4>
      <RatingWrapper>
        <dt>Rating: </dt>
        <dd>
          <Rating ratingScore={ratingScore} />
        </dd>
      </RatingWrapper>
      <JournalNote>
        <span>{createdAt}</span>
        <p>{journalContent}</p>
      </JournalNote>
      {props.children}
    </JournalEntryWrapper>
  )
}
const JournalEntryWrapper = styled.section`
  display: grid;
  width: 100%;
  gap: var(--space-small);
  border: none;
  border-radius: var(--space-xxsmall);
  background: var(--color-ghost-white);
  color: var(--color-midnight-blue);
  padding: var(--space-small);
  box-shadow: 0px 2px 1px #00000070;
  position: relative;
  place-content: start;

  h4 {
    padding-bottom: var(--space-xsmall);
    font-size: 0.9em;
    font-weight: 400;
  }
`
const RatingWrapper = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 0.9em;
  align-items: center;
  font-weight: 500;
`
const JournalNote = styled.div`
  font-weight: 300;
  font-style: italic;

  span {
    font-size: 0.9em;
  }
`
const EditButton = styled(Button)`
  position: absolute;
  right: var(--space-xxsmall);
  top: var(--space-xxsmall);
  padding: var(--space-xxsmall);
  box-shadow: none;
  border-radius: var(--space-xxsmall);
`
