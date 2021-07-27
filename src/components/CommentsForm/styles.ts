import styled from 'styled-components'
import TextareaAutosize from 'react-textarea-autosize'

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  display: block;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 20px;
  flex-shrink: 0;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e1bfbf;
  color: rgba(245, 245, 245, 1);
  transition: .3s ease-out;
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

export const Input = styled.input`
  background: #fdfeff;
  border: 1px solid #e8e9eb;
  border-radius: 3px;
  padding: 0 15px;
  height: 2rem;
  color: #000;
  width: 100%;
  box-sizing: border-box;
  font-size: 14px;
  ${props => props.theme.media.below.md} {
    padding: 0 8px;
  }
`

export const Field = styled.label`
  width: 100%;
  display: block;
  border: 1px solid #e8e9eb;
  border-radius: 3px;
  background: #fdfeff;
  position: relative;
  padding: 15px;
  cursor: text;
  color: #000;
  &::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    right: 100%;
    top: 50%;
    margin-top: -18px;
    border-style: solid;
    border-width: 18px 18px 18px 0;
    border-color: transparent #e8e9eb transparent transparent;
  }
  &::after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    right: 100%;
    top: 50%;
    margin-top: -16px;
    border-style: solid;
    border-width: 16px 16px 16px 0;
    border-color: transparent white transparent transparent;
  }
  &:focus-within {
    background: #f5faff;
    &::after {
      border-right-color: #f5faff;
    }
  }
  ${props => props.theme.media.below.md} {
    padding: 8px;
  }
`

export const Textarea = styled(TextareaAutosize)`
  font-size: 14px;
  padding: 0;
  line-height: 1.25;
  flex-grow: 1;
  background: transparent;
  display: block;
  resize: none;
  &:focus {
    outline: none;
  }
`

export const Action = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c66;
  font-size: 20px;
  opacity: .6;
  align-self: flex-end;
  margin-top: -10px;
  margin-bottom: -10px;
  width: 40px;
  height: 40px;
  color: #c66;
  font-size: 20px;
  opacity: .6;
  &:hover {
    opacity: 1;
  }
`

export const Form = styled.div`
  position: relative;
  width: 100%;
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

export const QuoteRemove = styled.button`
  font-size: 18px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export const Quote = styled.a`
  font-size: 12px;
  color: #c66;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  position: relative;
  line-height: 1;
  background: #ffe6c5;
  padding: 8px;
  border-radius: 4px;
  text-decoration: none;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  scroll-margin-top: 100px;
  * + & {
    margin-top: 2.5rem;
  }
`
