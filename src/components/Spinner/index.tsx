import React from 'react'

import styles from './styles.module.css'

export interface SpinnerProps {
  size?: number
  color?: string
}

export const Spinner = ({
  size = 18,
  color = 'currentColor'
}: SpinnerProps) => {
  return (
    <div
      className={styles.Spinner}
      style={{
        width: size,
        height: size,
        borderColor: color
      }}
    />
  )
}
