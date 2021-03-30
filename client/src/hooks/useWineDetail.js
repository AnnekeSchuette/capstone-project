import { useQuery } from 'react-query'
import getWinebyId from 'services/getWineById'

export default function useWineDetail(wineId) {
  const {
    isLoading,
    error,
    data: currentWineData,
    isFetching,
  } = useQuery('currentWineData', () => getWinebyId(wineId))

  return [isLoading, error, currentWineData, isFetching]
}
