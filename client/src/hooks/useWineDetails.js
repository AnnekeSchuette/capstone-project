import { useQuery } from 'react-query'

export default function useWineDetails(wineId) {
  const getWinebyId = () => fetch(`/api/stored-wines/${wineId}`)
  const getJournalEntry = () => fetch(`/api/journal-entries/${wineId}`)

  const { data, isLoading, error, isFetching } = useQuery(
    'batchedDetailData',
    getDetailData
  )

  function getDetailData() {
    return Promise.all([getWinebyId(), getJournalEntry()])
      .then(responses => {
        return Promise.all(
          responses.map(response => {
            return response.json()
          })
        )
      })
      .then(data => data)
  }

  return [data, isLoading, error, isFetching]
}
