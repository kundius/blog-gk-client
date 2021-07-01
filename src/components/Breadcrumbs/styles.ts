import styled from 'styled-components'

export const Wrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
  font-size: 13px;
  line-height: 1;
  li::after {
    content: '/';
    margin: 0 12px;
  }
  li:last-child::after {
    display: none;
  }
  a:hover {
    color: var(--color-text);
  }
`
