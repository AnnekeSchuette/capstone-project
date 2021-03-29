import { useState } from 'react'
import { useQuery } from 'react-query'

export default function useWineDetail(id) {
  const [clickedWineId, setClickedWineId] = useState()

  const {
    isLoading,
    error,
    currentWineData,
    isFetching,
  } = useQuery('currentWineData', () =>
    fetch(`/api/stored-wines/${id}`).then(res => res.json())
  )

  return [
    clickedWineId,
    setClickedWineId,
    currentWineData,
    isLoading,
    isFetching,
    error,
  ]
}
