import styled from 'styled-components'

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background: #e1bfbf;
  margin-right: 20px;
  flex-shrink: 0;
  font-size: 28px;
  color: rgba(245, 245, 245, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Name = styled.div`
  font-size: 14px;
  font-weight: 600;
  max-width: 120px;
  margin-right: 20px;
  text-decoration: none;
  display: block;
`

export const Date = styled.div`
  color: #c66;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.55px;
  display: inline-flex;
  align-items: center;
  svg {
    margin-right: 4px;
    font-size: 20px;
  }
`

export const Headline = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`

export const Body = styled.div`
  flex-grow: 1;
`

export const Text = styled.div`
  font-size: 14px;
`

export const Action = styled.button`
  color: #c66;
  text-transform: uppercase;
  display: inline-block;
  border-bottom: 1px dashed #c66;
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  padding: 2px 0;
`

export const Wrapper = styled.div<{
  isHighlight?: boolean
}>`
  display: flex;
  align-items: flex-start;
  position: relative;
  z-index: 1;
  scroll-margin-top: 100px;
  * + & {
    margin-top: 2.5rem;
  }
  &::before {
    content: '';
    background: rgba(255, 213, 156, .2);
    border-radius: 6px;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    position: absolute;
    z-index: -1;
    transition: opacity 1s ease;
    opacity: ${props => props.isHighlight ? 1 : 0};
  }
`

export const QuoteIcon = styled.span`
  font-size: 20px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export const QuoteText = styled.span`
  margin: 0 6px;
  flex-grow: 1;
`

export const Quote = styled.a`
  font-size: 12px;
  color: #c66;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
  line-height: 1;
  background: #ffd59c;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
`
