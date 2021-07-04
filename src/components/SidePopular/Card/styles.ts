import styled from 'styled-components'

export const Wrapper = styled.div`
  ::after {
    content: '';
    background: url('/images/delimeter.png') no-repeat;
    width: 47px;
    height: 5px;
    display: block;
    margin: 48px auto;
  }
  :last-child::after {
    display: none;
  }
`

export const Thumbnail = styled.div`
  flex-shrink: 0;
  width: 240px;
  height: 240px;
  margin-right: 16px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
`

export const Date = styled.div`
  font-size: 12px;
  letter-spacing: 1.2px;
  text-align: center;
  margin-top: 12px;
`

export const Title = styled.div`
  font-size: 28px;
  line-height: 1;
  font-weight: 600;
  text-align: center;
  letter-spacing: .5px;
  line-height: 1;
  a:hover {
    color: #c66;
  }
`

export const Category = styled.div`
  text-align: center;
  color: #c66;
  font-size: 12px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1.75px;
  margin-bottom: 12px;
  a:hover {
    color: #f00;
  }
`
