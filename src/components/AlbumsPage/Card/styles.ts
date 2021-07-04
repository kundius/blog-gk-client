import styled from 'styled-components'

export const Thumbnail = styled.figure`
  position: relative;
`

export const Inner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`

export const ThumbnailPlaceholder = styled.figure`
  display: block;
  padding-top: 120%;
  font-size: 128px;
  color: var(--color-background);
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

export const Name = styled.a`
  background-color: rgba(255, 239, 217, .8);
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  color: #000;
  padding: 16px 16px;
  width: 100%;
  transition: .3s ease-out;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  :hover {
    background-color: rgba(255, 239, 217, 1);
  }
`

export const Wrapper = styled.article`
  position: relative;
`
