import styled from 'styled-components'

export const Main = styled.div`
  width: 675px;
  margin-left: auto;
  margin-right: auto;
`

export const Content = styled.div`
  font-size: 18px;
  h2 {
    font-size: 32px;
    font-weight: 600;
    line-height: 1;
    margin-top: 48px;
    margin-bottom: 24px;
  }
  h3 {
    font-size: 28px;
    font-weight: 600;
    line-height: 1;
    margin-top: 48px;
    margin-bottom: 24px;
  }
  p {
    margin: 24px 0;
  }
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
  
`
