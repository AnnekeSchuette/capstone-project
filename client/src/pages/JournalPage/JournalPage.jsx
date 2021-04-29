import styled from 'styled-components/macro'
import JournalEntry from 'components/JournalEntry/JournalEntry'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import StatusMessage from 'components/StatusMessage/StatusMessage'
import PuffLoader from 'react-spinners/PuffLoader'

export default function JournalPage() {
  const { data: journalEntries, isLoading, error, isFetching } = useQuery(
    'journalEntries',
    () =>
      fetch(`/api/journal-entries/`)
        .then(res => res.json())
        .then(data => data)
  )

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
      <h2>Keep Track Of Your Tastings</h2>
      {journalEntries.map(journalEntryData => {
        const detailLink = `/wine/detail/${journalEntryData.wineId}`
        const { imageUrl, title } = journalEntryData.wine[0]

        return (
          <Link to={detailLink} key={journalEntryData._id}>
            <JournalListItem journalEntryData={journalEntryData}>
              <h3>{title}</h3>
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

  h3 {
    grid-column: span 2;
    grid-area: 1 / 1 / 2 / 3;
  }

  img {
    max-height: 180px;
    max-width: 100%;
    grid-area: 2 / 2 / 2 / 3;
    justify-self: center;
    padding-bottom: var(--space-small);
    mix-blend-mode: darken;
  }

  div {
    grid-area: 2 / 1 / 2 / 2;
    width: 100%;
    place-content: start;
  }
`
