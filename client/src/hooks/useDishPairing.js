import { useQuery } from 'react-query'
import getDishPairingApi from 'services/getDishPairingApi'

export default function useDishPairing(wineType) {
  const {
    isLoading,
    error,
    data: pairingData,
    isFetching,
  } = useQuery('pairingData', () => getDishPairingApi(wineType))

  return [isLoading, error, pairingData, isFetching]
}
