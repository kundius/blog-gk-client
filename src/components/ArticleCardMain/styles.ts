import styled from 'styled-components'

export const Wrapper = styled.article`
  position: relative;
`

export const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 30px;
`

export const Category = styled.a`
  color: #c66;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  z-index: 2;
  &:hover {
    text-decoration: underline;
  }
`

export const Date = styled.div`
  color: #999;
  font-size: 12px;
  letter-spacing: 1px;
`

export const Name = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: .5px;
  a {
    color: inherit;
    &:hover {
      color: #c66;
    }
  }
`

export const Info = styled.div`
  padding-bottom: 10px;
  margin-top: 3.5rem;
  line-height: 1;
  transition: 300ms ease-out;
`

export const InfoItem = styled.div`
  color: #787878;
  text-transform: uppercase;
`

export const Thumbnail = styled.figure`
  margin-top: 2rem;
`

export const Excerpt = styled.div`
  margin-top: 2rem;
  font-size: 16px;
  letter-spacing: .28px;
  line-height: 1.45;
`

export const More = styled.a`
  margin-top: 20px;
  display: inline-block;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background: rgba(255,255,255,0);
  padding: 0 32px;
  white-space: nowrap;
  line-height: 58px;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  :hover {
    border-color: #c66;
    background: #c66;
    color: #fff;
  }
`
