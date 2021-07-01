import { useEffect, useState } from 'react'

export const useFocusVisible = () => {
  const [focusVisible, setFocusVisible] = useState(true)
  const handleKeyDown = () => {
    setFocusVisible(true)
  }
  const handleMouseDown = () => {
    setFocusVisible(false)
  }
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])
  return [focusVisible, setFocusVisible]
}
