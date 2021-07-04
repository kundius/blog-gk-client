import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  padding: 24px;
  z-index: 1;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px dashed var(--header-nav-border-color);
    display: block;
    z-index: -1;
    transition: 300ms ease-out
  }
  ::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    right: 4px;
    bottom: 4px;
    border: 1px dashed var(--header-nav-border-color);
    display: block;
    z-index: -1;
    transition: 300ms ease-out
  }
`
