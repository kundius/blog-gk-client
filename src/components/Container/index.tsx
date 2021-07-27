import styled from 'styled-components'

export const Container = styled.div`
  width: 1140px;
  max-width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-left: auto;
  margin-right: auto;
  ${props => props.theme.media.below.md} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
