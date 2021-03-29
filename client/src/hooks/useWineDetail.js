import useLocalStorage from 'hooks/useLocalStorage'
import getWinebyId from 'services/getWineById'
import { useEffect } from 'react'

export default function useWineDetail(id) {
  const [clickedWineId, setClickedWineId] = useLocalStorage('clickeWineId')
  const [currentWineData, setCurrentWineData] = useLocalStorage(
    'currentWineData'
  )
  useEffect(() => {
    const data = getWinebyId(id)
    return setCurrentWineData(data)
  }, [])

  return [clickedWineId, setClickedWineId, currentWineData, setCurrentWineData]
}
