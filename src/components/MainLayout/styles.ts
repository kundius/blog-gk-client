import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  gap: 80px;
`

export const Content = styled.div`
  width: 100%;
`

export const Side = styled.div`
  width: calc(100% * 1 / 3.001);
  flex-shrink: 0;
  ${props => props.theme.media.below.lg} {
    display: none;
  }
`
