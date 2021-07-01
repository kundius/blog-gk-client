import styled from 'styled-components'

export const Wrapper = styled.div`

`

export const Image = styled.div`
  position: relative;
  max-width: 260px;
  margin-left: auto;
  margin-right: auto;
  ::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

export const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: .5px;
  margin-top: 12px;
  text-align: center;
  line-height: 1;
`

export const Sub = styled.div`
  color: #666;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 4.1px;
  padding: 2px 0;
  text-align: center;
  line-height: 1;
  margin-top: 6px;
`

export const Desc = styled.div`
  margin-top: 20px;
  /* color: #333; */
  font-size: 14px;
  line-height: 1.25;
  text-align: center;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
`
