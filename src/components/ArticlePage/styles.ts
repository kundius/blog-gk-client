import styled from 'styled-components'

export const Main = styled.div`
  width: 675px;
  margin-left: auto;
  margin-right: auto;
`

export const Advert = styled.div`
  position: relative;
  ::before {
    content: '';
    position: absolute;
    top: -16px;
    left: -16px;
    right: -16px;
    bottom: -16px;
    border: 1px dashed var(--header-nav-border-color);
    display: block;
    z-index: 1;
    transition: 300ms ease-out
  }
  ::after {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
    border: 1px dashed var(--header-nav-border-color);
    display: block;
    z-index: 1;
    transition: 300ms ease-out
  }
  ${props => props.theme.media.below.md} {
    ::before {
      top: -12px;
      left: -12px;
      right: -12px;
      bottom: -12px;
    }
    ::after {
      top: -8px;
      left: -8px;
      right: -8px;
      bottom: -8px;
    }
  }
`
