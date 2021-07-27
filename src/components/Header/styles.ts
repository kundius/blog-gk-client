import styled from 'styled-components'

export const Placeholder = styled.div`
  height: 324px;
  ${props => props.theme.media.below.md} {
    height: 180px;
  }
`

export const Inner = styled.header`
  position: relative;
  ::before {
    content: '';
    height: 184px;
    display: block;
    width: 100%;
    background: url("/images/header-top.png") no-repeat calc(50% - 20px) 0;
    background-size: cover;
    transition: 300ms ease-out;
    ${props => props.theme.media.below.md} {
      height: 140px;
    }
    .isHeaderFixed & {
      display: none;
    }
  }
  ::after {
    content: '';
    height: 60px;
    display: block;
    width: 100%;
    background: url("/images/header-bottom.png") no-repeat calc(50% - 20px) 0;
    background-size: cover;
    transition: 300ms ease-out;
    ${props => props.theme.media.below.md} {
      height: 40px;
    }
    .isHeaderFixed & {
      display: none;
    }
  }
  ${props => props.theme.media.below.md} {
    margin-left: -1rem;
    margin-right: -1rem;
    /* .isHeaderFixed & {
      height: 48px;
      background: var(--color-background);
      background: var(--color-blurred-background);
      backdrop-filter: blur(8px);
      border-bottom: 1px dashed var(--header-nav-border-color);
    } */
  }
`

export const Slogan = styled.div`
  border-top: 4px dotted var(--slogan-border-top-color);
  padding-top: 14px;
  letter-spacing: 12px;
  text-align: center;
  color: var(--slogan-color);
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 12px;
  font-weight: 400;
  text-indent: 12px;
  position: absolute;
  line-height: 1;
  white-space: nowrap;
  top: 292px;
  left: 50%;
  transform: translateX(-50%);
  transition: border-top-color 300ms ease-out, color 300ms ease-out;
  .isHeaderFixed & {
    top: 60px;
    border-top: 0;
    letter-spacing: 10px;
    font-size: 12px;
    padding: 3px;
    z-index: 1;
    ::before {
      content: '';
      position: absolute;
      left: -3px;
      right: -3px;
      bottom: -3px;
      top: 0;
      border-left: 1px dashed var(--header-nav-border-color);
      border-right: 1px dashed var(--header-nav-border-color);
      border-bottom: 1px dashed var(--header-nav-border-color);
      border-radius: 0 0 24px 24px;
      background: var(--color-background);
      z-index: -1;
      transition: 300ms ease-out;
    }
    ::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      border-left: 1px dashed var(--header-nav-border-color);
      border-right: 1px dashed var(--header-nav-border-color);
      border-bottom: 1px dashed var(--header-nav-border-color);
      border-radius: 0 0 24px 24px;
      background: var(--color-background);
      z-index: -1;
      transition: 300ms ease-out;
    }
  }
  ${props => props.theme.media.below.md} {
    top: 160px;
    border-top: 0;
    /* .isHeaderFixed & {
      display: none;
    } */
  }
`

export const Search = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  z-index: 20;
  .isHeaderFixed & {
    display: none;
  }
  ${props => props.theme.media.below.md} {
    .isHeaderFixed & {
      display: block;
    }
  }
  /* .isHeaderFixed & {
    top: 60px;
    padding-left: 16px;
    padding-right: 16px;
    z-index: 10;
    ::before {
      content: '';
      position: absolute;
      left: -3px;
      right: -3px;
      bottom: -3px;
      top: 0;
      border-left: 1px dashed var(--header-nav-border-color);
      border-right: 1px dashed var(--header-nav-border-color);
      border-bottom: 1px dashed var(--header-nav-border-color);
      border-radius: 0 0 24px 24px;
      background: var(--color-background);
      z-index: -1;
      transition: 300ms ease-out;
    }
    ::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      border-left: 1px dashed var(--header-nav-border-color);
      border-right: 1px dashed var(--header-nav-border-color);
      border-bottom: 1px dashed var(--header-nav-border-color);
      border-radius: 0 0 24px 24px;
      background: var(--color-background);
      z-index: -1;
      transition: 300ms ease-out;
    }
  } */
`

// export const SmallLogo = styled.a`
//   width: 100px;
//   height: 100px;
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
//   top: 50px;
//   .isHeaderFixed & {
//     width: 44px;
//     height: 44px;
//     top: 2px;
//   }
//   ${props => props.theme.media.above.md} {
//     display: none;
//   }
// `

export const Buttons = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  align-items: center;
  gap: 16px;
  .isHeaderFixed & {
    display: none;
  }
  ${props => props.theme.media.below.md} {
    display: none;
  }
  /* .isHeaderFixed & {
    top: 60px;
    padding-left: 16px;
    padding-right: 16px;
    ::before {
      content: '';
      position: absolute;
      left: -3px;
      right: -3px;
      bottom: -3px;
      top: 0;
      border-left: 1px dashed var(--header-nav-border-color);
      border-right: 1px dashed var(--header-nav-border-color);
      border-bottom: 1px dashed var(--header-nav-border-color);
      border-radius: 0 0 24px 24px;
      background: var(--color-background);
      z-index: -1;
      transition: 300ms ease-out;
    }
    ::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      border-left: 1px dashed var(--header-nav-border-color);
      border-right: 1px dashed var(--header-nav-border-color);
      border-bottom: 1px dashed var(--header-nav-border-color);
      border-radius: 0 0 24px 24px;
      background: var(--color-background);
      z-index: -1;
      transition: 300ms ease-out;
    }
  } */
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
  /* .isHeaderFixed & {
    width: 28px;
    height: 28px;
  } */
`

export const Wrapper = styled.header`
  z-index: 200;
  width: 100%;
  top: 0;
  left: 0;
  position: relative;
  &.isHeaderFixed {
    position: fixed;
  }
`
