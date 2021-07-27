import styled from 'styled-components'

export const MainLink = styled.a`
  display: block;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
  }
`

export const Thumbnail = styled.figure`
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

export const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 100%;
  background: rgba(250,235,215,.95);
  display: flex;
  transform: translateX(-100%);
  transition: .3s ease-out;
  z-index: 20;
`

export const Info = styled.div`
  flex-grow: 1;
  padding: 16px;
  width: 100%;
`

export const Category = styled.a`
  color: #c66;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  z-index: 3;
  &:hover {
    text-decoration: underline;
  }
`

export const Date = styled.div`
  color: #999;
  font-size: 12px;
  letter-spacing: 1px;
  margin-top: 12px;
`

export const Excerpt = styled.div`
  margin-top: 2rem;
  font-size: 16px;
  letter-spacing: .28px;
  line-height: 1.45;
  color: #000;
`

export const Name = styled.div`
  background-color: #dcd5cb;
  font-size: 18px;
  font-weight: 700;
  height: 100%;
  line-height: 1;
  color: #000;
  padding: 16px 16px;
  transform: translateX(100%) rotate(-180deg);
  writing-mode: vertical-rl;
  transition: .3s ease-out;
  z-index: 1;
`

export const More = styled.a`
  margin-top: 20px;
  display: inline-block;
  text-align: center;
  border-radius: 3px;
  border: none;
  background: #c66;
  color: #fff;
  padding: 0 28px;
  white-space: nowrap;
  line-height: 48px;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  :hover {
    background: #c00;
  }
  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
`

export const Wrapper = styled.article`
  position: relative;
  overflow: hidden;
  ${props => props.theme.media.above.lg} {
    :hover ${Inner} {
      transform: translateX(0);
    }
    :hover ${Name} {
      transform: translateX(0) rotate(-180deg);
    }
  }
`
