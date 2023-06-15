import { useState } from "react"

export function useToggle (initialState: boolean = false): [boolean, () => void] {
  const [isTruth, setIsTruth] = useState(initialState)

  const toggle = () => setIsTruth(prevState => !prevState)

  return [isTruth, toggle]
}