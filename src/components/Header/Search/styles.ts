import styled from 'styled-components'

export const Wrapper = styled.form`
  position: relative;
`

export const Field = styled.input`
  position: absolute;
  left: -8px;
  right: -8px;
  background: ${props => props.theme.colorMode === 'dark' ? '#6b7280' : '#ffffff'};
  padding-right: 0;
  padding-left: 3rem;
  z-index: 1;
  top: -8px;
  bottom: -8px;
  border-radius: 24px;
  box-shadow: ${props => props.theme.colorMode === 'dark' ? 'rgb(255 255 255 / 0%) 0px -5.9px 2.7px, rgb(255 255 255 / 2%) 0px -1.2px 6.9px, rgb(255 255 255 / 3%) 0px 8px 14.2px, rgb(255 255 255 / 4%) 0px 21.9px 29.2px' : 'rgb(0 0 0 / 2%) 0px -5.9px 2.7px, rgb(0 0 0 / 2%) 0px -1.2px 6.9px, rgb(0 0 0 / 3%) 0px 8px 14.2px, rgb(0 0 0 / 4%) 0px 21.9px 29.2px'};
  transform-origin: 2rem 50%;
  width: 0;
  transition: background 300ms ease-out, box-shadow 300ms ease-out;
`

export const Button = styled.button`
  font-size: 18px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  opacity: 0.7;
  :hover {
    opacity: 1;
  }
  .isHeaderFixed & {
    width: 28px;
    height: 28px;
  }
`
