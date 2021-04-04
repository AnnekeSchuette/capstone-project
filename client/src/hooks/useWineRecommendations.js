import { useQuery } from 'react-query'
import getWinePairingApi from 'services/getWinePairingApi'

export default function useWineRecommendations(food) {
  const {
    isLoading,
    error,
    data: wineRecommendation,
    isFetching,
  } = useQuery('wineRecommendation', () => getWinePairingApi(food))

  return [isLoading, error, wineRecommendation, isFetching]
}
