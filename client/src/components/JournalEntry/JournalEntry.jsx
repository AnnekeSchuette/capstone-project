import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Rating from 'components/Rating/Rating'
import { PencilAlt } from 'heroicons-react'

JournalEntry.propTypes = {
  ratingScore: PropTypes.number,
  personalRating: PropTypes.number,
}
export default function JournalEntry({
  createdAt,
  ratingScore,
  journalContent,
  ...props
}) {
  return (
    <JournalEntryWrapper {...props}>
      <h3>Your Rating</h3>
      <Rating ratingScore={ratingScore} />
      <h3>Your notes</h3>
      <JournalNote>
        <PencilAlt />
        <span>{createdAt}</span>
        <p>{journalContent}</p>
      </JournalNote>
      {props.children}
    </JournalEntryWrapper>
  )
}
const JournalEntryWrapper = styled.form`
  display: grid;
  width: 100%;
  gap: 20px;
`

const JournalNote = styled.article`
  font-weight: 300;
  font-style: italic;
  border: none;
  border-radius: var(--space-xxsmall);
  background: var(--color-ghost-white);
  color: var(--color-midnight-blue);
  padding: var(--space-small);

  span {
    font-size: 0.9em;
  }
`
