import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 48px;
  :last-child {
    margin-bottom: 0;
  }
`

export const Thumbnail = styled.div`
  flex-shrink: 0;
  width: 90px;
  height: 90px;
  margin-right: 16px;
`

export const Info = styled.div`
  flex-grow: 1;
`

export const Date = styled.div`
  font-size: 12px;
  letter-spacing: 1.2px;
  margin-top: 12px;
`

export const Title = styled.div`
  font-size: 16px;
  line-height: 1;
  font-weight: 700;
  line-height: 1;
  a:hover {
    color: #c66;
  }
`

export const Category = styled.div`
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
