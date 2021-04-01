import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import postJournalEntry from 'services/postJournalEntry'
import Rating from 'components/Rating/Rating'
import Button from 'components/Button/Button'

JournalForm.propTypes = {
  ratingScore: PropTypes.number,
  personalRating: PropTypes.number,
}
export default function JournalForm({
  wineId,
  userId,
  isDisabled = false,
  ratingScore = 0,
  setRatingScore,
  noteContent,
  ...props
}) {
  const onSubmit = event => {
    event.preventDefault()
    const form = event.target
    const { notes } = form.elements
    return postJournalEntry({
      wine_id: wineId,
      user_id: `ObjectId('${userId}')`,
      rating: ratingScore,
      notes: notes.value,
    })
  }
  return (
    <JournalFormWrapper onSubmit={onSubmit} {...props}>
      <h3>Rate this wine</h3>
      <Rating
        ratingScore={ratingScore}
        setRatingScore={setRatingScore}
        isDisabled={false}
      />
      <label htmlFor="journalText">
        <h3>Keep notes</h3>
      </label>
      <JournalNote
        id="journalText"
        placeholder="Type in your note, i.e. information about the taste or the dish you served this wine to."
        rows="4"
        autoComplete="off"
        name="notes"
      ></JournalNote>
      {props.children}
      <Button buttonText="Save" disabled={isDisabled} />
    </JournalFormWrapper>
  )
}
const JournalFormWrapper = styled.form`
  display: grid;
  width: 100%;
  gap: 20px;
  place-items: center;
`

const JournalNote = styled.textarea`
  font-weight: 300;
  font-style: italic;
  border: none;
  border-radius: var(--space-xxsmall);
  font-size: 0.9em;
  padding: var(--space-xsmall);
  resize: none;
`
