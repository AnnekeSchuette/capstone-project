import { useMutation, queryCache } from 'react-query'

export default function useSaveJournalEntry(values) {
  const config = {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    upsert: true,
    body: JSON.stringify(values),
  }
  return useMutation(
    values =>
      fetch(`/api/journal-entries/${values._id}`, config)
        .then(res => res.json())
        .then(data => data),
    {
      onMutate: values => {
        const prevJournalEntry = queryCache.getQueryData([
          'journalEntry',
          values.id,
        ])

        return () =>
          queryCache.setQueryData(['journalEntry', values.id], prevJournalEntry)
      },
      onError: (error, values, rollback) => rollback(),
      onSuccess: async values => {
        await queryCache.refetchQueries(['journalEntry', values.id])
      },
    }
  )
}
