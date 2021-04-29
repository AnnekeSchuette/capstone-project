import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Rating from 'components/Rating/Rating'
import { Pencil } from 'heroicons-react'
import Button from 'components/Button/Button'
import getFormattedDate from 'lib/getFormattedDate'

JournalEntry.propTypes = {
  ratingScore: PropTypes.number,
  personalRating: PropTypes.number,
}

export default function JournalEntry({
  editMode,
  onEdit,
  ratingScore,
  setRatingScore,
  journalEntryData,
  ...props
}) {
  const { rating, notes, createdAt } = journalEntryData
  const createdAtFormatted = getFormattedDate(new Date(createdAt))

  return (
    <JournalEntryWrapper {...props}>
      {props.children}
      <EditButton onClick={() => onEdit(true)}>
        <Pencil size="20" />
      </EditButton>
      <JournalNote>
        <span>{createdAtFormatted}</span>
        <RatingWrapper>
          <Rating
            ratingScore={rating}
            editMode={editMode}
            setRatingScore={setRatingScore}
          />
        </RatingWrapper>
        <p>{notes}</p>
      </JournalNote>
    </JournalEntryWrapper>
  )
}
const JournalEntryWrapper = styled.article`
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

  h3 {
    font-size: 0.9em;
    place-self: start;
  }
`
const RatingWrapper = styled.div`
  display: grid;
  font-size: 0.9em;
  place-items: start;
  margin: var(--space-small) 0;
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
  right: var(--space-xsmall);
  top: var(--space-xxsmall);
  padding: var(--space-xxsmall) 0 var(--space-xxsmall) var(--space-xxsmall);
  box-shadow: none;
  border-radius: 0px;
  background: none;
  color: var(--color-popstar);
  border-bottom: 1px solid var(--color-popstar);
`
