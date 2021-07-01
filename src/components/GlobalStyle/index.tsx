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
`
