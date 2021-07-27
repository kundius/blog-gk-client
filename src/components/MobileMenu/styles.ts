import styled, { css } from 'styled-components'

export const List = styled.ul`
  > li {
    padding: 12px 12px 12px 32px;
    font-size: 24px;
    > a {
      text-decoration: none;
      color: var(--color-text);
    }
  }
`

export const SecondList = styled.ul`
  display: none;
`

export const Drawer = styled.div<{
  isVisible: boolean
}>`
  display: ${props => props.isVisible ? 'flex' : 'none'};
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100vw;
  height: 100vh;
  z-index: 300;
  background: var(--color-blurred-background);
  backdrop-filter: blur(8px);
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-left: 32px;
  margin-top: 32px;
`

export const Button = styled.button`
  font-size: 18px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
`

export const Toggle = styled.button<{
  isActive: boolean
}>`
  position: fixed;
  right: 1rem;
  top: 1rem;
  width: 32px;
  height: 32px;
  z-index: 300;
  ::before {
    content: '';
    width: 28px;
    height: 3px;
    background: currentColor;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: ${props => props.isActive ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, -50%)'};
    border-radius: 2px;
    margin-top: ${props => props.isActive ? '0' : '-8px'};
    transition: .3s ease-out;
  }
  ::after {
    content: '';
    width: 28px;
    height: 3px;
    background: currentColor;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: ${props => props.isActive ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -50%)'};
    border-radius: 2px;
    margin-top: ${props => props.isActive ? '0' : '8px'};
    transition: .3s ease-out;
  }
  .isHeaderFixed & {
    top: 0.5rem;
  }
`
