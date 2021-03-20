import { useState } from 'react'
export default function useToggle(initialValue) {
  const [toggleState, setToggleState] = useState(initialValue)

  function toggle() {
    setToggleState(!toggleState)
  }
  return [toggleState, toggle]
}
