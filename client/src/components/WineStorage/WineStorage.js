import WineListing from 'components/WineListing/WineListing'
import { useSaveWine } from 'lib/customHooks'

export default function WineStorage({ results }) {
  const [savedWines] = useSaveWine()
  return <WineListing results={savedWines} />
}
