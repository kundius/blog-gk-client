import styled, { css } from 'styled-components'

export const List = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  li {
    margin-left: 20px;
    margin-right: 20px;
    position: relative;
    ${props => props.theme.media.below.lg} {
      margin-left: 8px;
      margin-right: 8px;
    }
    a {
      font-size: 18px;
      font-weight: 600;
      text-transform: uppercase;
      color: inherit;
      position: relative;
      letter-spacing: 0.1em;
      display: block;
      white-space: nowrap;
      ${props => props.theme.media.below.lg} {
        font-size: 14px;
      }
      &:hover {
        color: #c99;
      }
    }
  }
  ${props => props.theme.media.below.xl} {
    margin-left: 0;
    margin-right: 0;
  }
  ${props => props.theme.media.below.md} {
    display: none;
  }
`

export const SecondList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2,minmax(0,1fr));
  gap: 1rem;
  padding: 0.5rem;
  li {
    a {
      font-size: 16px;
      color: inherit;
      position: relative;
      display: block;
      &:hover {
        color: #c99;
      }
    }
  }
`

export const Logo = styled.a`
  display: block;
  position: absolute;
  z-index: 2;
  left: 50%;
  top: -28px;
  transform: translateX(-50%);
  width: 118px;
  height: 118px;
  flex-shrink: 0;
  ${props => props.theme.media.below.lg} {
    top: -12px;
    width: 100px;
    height: 100px;
  }
  img {
    display: block;
  }
  .isHeaderFixed & {
    top: 0;
    width: 60px;
    height: 60px;
  }
  ${props => props.theme.media.below.md} {
    top: -72px;
    .isHeaderFixed & {
      top: 3px;
      width: 54px;
      height: 54px;
    }
  }
`

export const Dropdown = styled.button`
  background: #e1bfbf;
  width: 14px;
  height: 14px;
  box-sizing: border-box;
  position: absolute;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  right: -20px;
  ${props => props.theme.media.below.lg} {
    right: -16px;
  }
  ::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 5px;
    height: 5px;
    transform: translate(-50%, -50%) rotate(-45deg);
    margin-top: -1px;
    border-left: 1px solid var(--color-background);
    border-bottom: 1px solid var(--color-background);
    transition: border-color 300ms ease-out;
  }
`

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: var(--color-background);
  transition: background 300ms ease-out;
  height: 80px;
  gap: 118px;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border-top: 1px dashed var(--header-nav-border-color);
    border-bottom: 1px dashed var(--header-nav-border-color);
    padding-top: 1px;
    display: block;
    z-index: 1;
    transition: 300ms ease-out
  }
  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px dashed var(--header-nav-border-color);
    border-bottom: 1px dashed var(--header-nav-border-color);
    padding-top: 1px;
    display: block;
    z-index: 1;
    transition: 300ms ease-out
  }
  .isHeaderFixed & {
    height: 60px;
  }
  ${props => props.theme.media.below.md} {
    height: 0;
  }
`
