import { useQuery } from 'react-query'
import getJournalEntry from 'services/getJournalEntry'

export default function useJournal(wineId) {
  const {
    isLoading: journalLoading,
    error: journalError,
    data: journalEntry,
    isFetching: journalFetching,
  } = useQuery('journalEntry', () => getJournalEntry(wineId))

  return [journalLoading, journalError, journalEntry, journalFetching]
}
