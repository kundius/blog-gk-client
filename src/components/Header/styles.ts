import styled from 'styled-components'

export const Placeholder = styled.div`
  height: 324px;
`

export const Inner = styled.header`
  position: relative;
  ::before {
    content: '';
    height: 184px;
    display: block;
    width: 100%;
    background: url("/images/header-top.png") no-repeat calc(50% - 20px) 0;
    transition: 300ms ease-out;
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
    transition: 300ms ease-out;
    .isHeaderFixed & {
      display: none;
    }
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
`

export const Search = styled.div`
  position: absolute;
  left: 1rem;
  top: 1rem;
  .isHeaderFixed & {
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
  }
`

export const Buttons = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  align-items: center;
  gap: 16px;
  .isHeaderFixed & {
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
  }
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
  .isHeaderFixed & {
    width: 28px;
    height: 28px;
  }
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
