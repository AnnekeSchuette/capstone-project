import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useWineDetail from 'hooks/useWineDetail'
import useJournal from 'hooks/useJournal'
import quarterCircleGrey from 'assets/quarterCircleGrey.svg'
import JournalEntry from 'components/JournalEntry/JournalEntry'
import JournalForm from 'components/JournalForm/JournalForm'
import getFormattedDate from 'lib/getFormattedDate'

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

export default function WineDetailPage(userId, ...props) {
  const { wineId } = useParams()
  const [isLoading, error, currentWineData, isFetching] = useWineDetail(wineId)

  const [ratingScore, setRatingScore] = useState(0)
  const [editMode, setEditMode] = useState(false)
  const [
    journalLoading,
    journalError,
    journalEntry,
    journalFetching,
  ] = useJournal(wineId)

  const averageRatingDecimal = currentWineData?.averageRating
    ? (currentWineData?.averageRating * 10).toFixed(1)
    : 'n.a.'

  const scoreDecimal = currentWineData?.score
    ? (currentWineData?.score * 10).toFixed(1)
    : 'n.a.'

  const largeImageUrl =
    currentWineData?.imageUrl &&
    currentWineData?.imageUrl.replace('312x231', '636x393')

  const wineSection = () => {
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
        <>
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
        </>
      )
    }
  }
  const journalSection = () => {
    const createdAt = new Date(journalEntry[0].createdAt)
    const entryCreatedAtFormatted = getFormattedDate(createdAt)

    if (journalLoading) {
      return 'Is loading ...'
    } else if (journalFetching) {
      return 'Updating ...'
    } else if (journalError || journalEntry?.error) {
      return `Oops, this should't happen ... 😬 ${
        currentWineData.error.message === undefined
          ? 'Note not found'
          : 'Error: ' + journalEntry.error.message
      }`
    } else {
      return (editMode ? (
        <JournalForm
          ratingScore={journalEntry[0].rating}
          setRatingScore={setRatingScore}
          journalContent={journalEntry[0].notes}
          isDisabled={false}
          wineId={wineId}
          userId={userId}
        />
      ) : (
        <JournalEntry
          ratingScore={journalEntry[0].rating}
          journalContent={journalEntry[0].notes}
          createdAt={entryCreatedAtFormatted}
          onEdit={setEditMode}
        />
      ))(
        <JournalForm
          ratingScore={ratingScore}
          setRatingScore={setRatingScore}
          isDisabled={false}
          wineId={wineId}
          userId={userId}
        />
      )
    }
  }
  return (
    <WineWrapper {...props}>
      {wineSection}
      {journalSection}
    </WineWrapper>
  )
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