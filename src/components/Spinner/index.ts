import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div<{
  size: number,
  color?: string
}>`
  animation: ${rotate} 800ms infinite linear;
  border: 2px solid ${props => props.color || 'currentColor'};
  opacity: .8;
  border-right-color: transparent;
  border-radius: 100%;
  display: inline-block;
  position: relative;
  overflow: hidden;
  text-indent: -9999px;
  width: ${props => props.size || 18}px;
  height: ${props => props.size || 18}px;
`

export default Spinner
