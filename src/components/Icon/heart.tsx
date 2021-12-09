import React from 'react'

export function HeartIcon({
  filled = false
}) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      width="1em"
      height="1em"
      stroke="currentColor"
      fill={filled ? 'currentColor' : 'transparent'}
      style={{
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: '32px'
      }}
    >
      <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
    </svg>
  )
}
