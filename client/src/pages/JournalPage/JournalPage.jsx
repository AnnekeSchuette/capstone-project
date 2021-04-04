import styled from 'styled-components/macro'
import JournalEntry from 'components/JournalEntry/JournalEntry'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import StatusMessage from 'components/StatusMessage/StatusMessage'

export default function JournalPage() {
  const { data: journalEntries, isLoading, error, isFetching } = useQuery(
    'journalEntries',
    () =>
      fetch(`/api/journal-entries/`)
        .then(res => res.json())
        .then(data => data)
  )

  if (isLoading) {
    return <StatusMessage>Is loading ...</StatusMessage>
  }
  if (isFetching) {
    return <StatusMessage>Updating ...</StatusMessage>
  }
  if (error || journalEntries?.error) {
    return (
      <StatusMessage>
        Oops, this should't happen ... 😬 $
        {journalEntries?.error.message === undefined
          ? 'No entries found'
          : 'Error: ' + journalEntries?.error.message}
      </StatusMessage>
    )
  }

  return (
    <JournalPageGrid>
      <h3>Keep Track Of Your Tastings</h3>
      {journalEntries.map(journalEntryData => {
        const detailLink = `/wine/detail/${journalEntryData.wineId}`
        const { imageUrl } = journalEntryData.wine[0]

        return (
          <Link to={detailLink} key={journalEntryData._id}>
            <JournalListItem journalEntryData={journalEntryData}>
              <img src={imageUrl} alt="" />
            </JournalListItem>
          </Link>
        )
      })}
    </JournalPageGrid>
  )
}

const JournalPageGrid = styled.section`
  display: grid;
  gap: var(--space-large) 0;

  a {
    text-decoration: none;
  }
`
const JournalListItem = styled(JournalEntry)`
  display: grid;
  grid-template-columns: 1fr 80px;
  place-items: end;

  img {
    max-height: 180px;
    max-width: 100%;
    grid-area: 1 / 2 / 2 / 3;
    justify-self: center;
    padding-bottom: var(--space-small);
  }

  div {
    grid-area: 1 / 1 / 2 / 2;
    width: 100%;
    place-content: start;
  }
`
