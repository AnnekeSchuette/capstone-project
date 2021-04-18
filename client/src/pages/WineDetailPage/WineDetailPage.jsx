import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import quarterCircleGrey from 'assets/quarterCircleGrey.svg'
import JournalForm from 'components/JournalForm/JournalForm'
import JournalEntry from 'components/JournalEntry/JournalEntry'
import postJournalEntry from 'services/postJournalEntry'
import updateJournalEntry from 'services/updateJournalEntry'
import useWineDetails from 'hooks/useWineDetails'
import StatusMessage from 'components/StatusMessage/StatusMessage'
import PuffLoader from 'react-spinners/PuffLoader'

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

export default function WineDetailPage(user, ...props) {
  const { wineId } = useParams()
  const [ratingScore, setRatingScore] = useState(0)
  const [editMode, setEditMode] = useState(false)

  const [data, isLoading, error, isFetching] = useWineDetails(wineId)

  if (isLoading) {
    return (
      <StatusMessage>
        Is loading ...
        <PuffLoader color="#b84a62" loading="true" size={150} />
      </StatusMessage>
    )
  }
  if (isFetching) {
    return (
      <StatusMessage>
        Updating ...
        <PuffLoader color="#b84a62" loading="true" size={150} />
      </StatusMessage>
    )
  }

  if (error || data?.error) {
    return (
      <StatusMessage>
        Oops, this should't happen ... 😬
        {data?.error.message === undefined
          ? 'Wine not found'
          : 'Error: ' + data?.error.message}
      </StatusMessage>
    )
  }
  const [currentWineData, journalEntryData] = data

  const averageRatingDecimal = currentWineData?.averageRating
    ? (currentWineData?.averageRating * 10).toFixed(1)
    : 'n.a.'

  const scoreDecimal = currentWineData?.score
    ? (currentWineData?.score * 10).toFixed(1)
    : 'n.a.'

  const largeImageUrl =
    currentWineData?.imageUrl &&
    currentWineData?.imageUrl.replace('312x231', '636x393')

  const handleJournalEntryCreate = event => {
    event.preventDefault()
    const form = event.target
    const { notes } = form.elements

    return postJournalEntry({
      wineId,
      rating: ratingScore,
      notes: notes.value,
    })
  }
  const handleJournalEntryUpdate = event => {
    event.preventDefault()
    const form = event.target
    const { notes } = form.elements

    return updateJournalEntry({
      _id: journalEntryData._id,
      wineId,
      rating: ratingScore,
      notes: notes.value,
    })
  }
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
          <ListTerm id={`${currentWineData?.id}-price`}>Price (avg):</ListTerm>
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
      {journalEntryData ? (
        editMode ? (
          <JournalForm
            ratingScore={ratingScore}
            setRatingScore={setRatingScore}
            journalContent={journalEntryData?.notes}
            wineId={wineId}
            user={user}
            initialValues={journalEntryData}
            onSubmit={handleJournalEntryUpdate}
            submitText="save changes"
            editMode={editMode}
          />
        ) : (
          <JournalEntry
            journalEntryData={journalEntryData}
            editMode={editMode}
            onEdit={setEditMode}
          >
            <h4>Your personal rating and notes</h4>
          </JournalEntry>
        )
      ) : (
        <>
          <JournalForm
            ratingScore={ratingScore}
            initialValues={journalEntryData}
            setRatingScore={setRatingScore}
            wineId={wineId}
            user={user}
            onSubmit={handleJournalEntryCreate}
            editMode="true"
            submitText="create entry"
          />
        </>
      )}
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
