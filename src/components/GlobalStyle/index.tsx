import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background: var(--color-background);
    color: var(--color-text);
    transition: color 300ms ease-out, background 300ms ease-out;
    font-family: Gilroy, sans-serif;
  }
  :focus {
    outline: ${props => props.theme.focusVisible ? 'initial' : '0 !important'};
  }
  ::-moz-focus-inner {
    border: ${props => props.theme.focusVisible ? 'initial' : '0 !important'};
  }
  h1 {
    letter-spacing: 0.025em;
    font-size: 3rem;
    line-height: 1;
    font-weight: 700;
    ${props => props.theme.media.below.md} {
      font-size: 2.25rem;
      font-weight: 600;
    }
  }
  #__next {
    width: 100%;
    overflow: hidden;
  }
`
