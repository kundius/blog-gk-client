import styled from 'styled-components'

export const Content = styled.div`
  font-size: 18px;
  h2 {
    font-size: 32px;
    font-weight: 600;
    line-height: 1;
    margin-top: 48px;
    margin-bottom: 24px;
    ${props => props.theme.media.below.md} {
      font-size: 28px;
    }
  }
  h3 {
    font-size: 28px;
    font-weight: 600;
    line-height: 1;
    margin-top: 48px;
    margin-bottom: 24px;
    ${props => props.theme.media.below.md} {
      font-size: 24px;
    }
  }
  p {
    margin: 24px 0;
  }
`
