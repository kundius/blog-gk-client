import styled from 'styled-components'

export const Wrapper = styled.footer`
`

export const Primary = styled.div`
  position: relative;
  padding-top: 62px;
  padding-bottom: 62px;
  :before {
    content: '';
    display: block;
    background: url('/images/footer.png') no-repeat 50% 50%;
    width: 258px;
    height: 126px;
    position: absolute;
    bottom: 0;
    right: 0;
    ${props => props.theme.media.below.lg} {
      display: none;
    }
  }
`

export const Secondary = styled.div`
  position: relative;
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
  ${props => props.theme.media.below.md} {
    flex-wrap: wrap;
  }
`

export const Copyright = styled.div`
  font-size: 13px;
  line-height: 1.3;
  letter-spacing: .14px;
  ${props => props.theme.media.below.md} {
    font-size: 12px;
  }
`

export const Creator = styled.a`
  font-size: 13px;
  line-height: 1.3;
  letter-spacing: .14px;
  text-align: right;
  display: flex;
  align-items: center;
  white-space: nowrap;
  margin-left: auto;
  :after {
    content: '';
    display: inline-block;
    background: url('/images/footer-domenart.png');
    width: 45px;
    height: 37px;
    margin-left: 12px;
  }
  :hover:after {
    background: url('/images/footer-domenart_hover.png');
  }
  ${props => props.theme.media.below.md} {
    font-size: 12px;
  }
`
