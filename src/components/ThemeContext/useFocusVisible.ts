import React, { useEffect, useState } from 'react'

export const useFocusVisible = (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
  const [focusVisible, setFocusVisible] = useState(true)
  const handleKeyDown = () => {
    const root = window.document.documentElement
    root.classList.add('focusVisible')
    setFocusVisible(true)
  }
  const handleMouseDown = () => {
    const root = window.document.documentElement
    root.classList.remove('focusVisible')
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
