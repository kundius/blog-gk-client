import styled from 'styled-components'

export const Wrapper = styled.form`
  border: 1px solid #ccc;
  background: #faebd7;
  border-radius: 4px;
  padding: 32px 4rem;
  display: flex;
  align-items: center;
  ${props => props.theme.media.below.md} {
    padding: 1rem 1rem 2rem;
  }
`

export const Help = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: block;
  color: #000;
  font-size: 14px;
  font-style: italic;
  letter-spacing: .35px;
  padding: 4px 0;
`

export const Label = styled.label`
  margin-right: 16px;
  color: #000;
  ${props => props.theme.media.below.md} {
    display: none;
  }
`

export const Field = styled.input`
  border: 1px solid #999;
  background: #fff;
  border-radius: 4px;
  padding: 0 16px;
  color: #999;
  font-size: 14px;
  font-style: italic;
  letter-spacing: .14px;
  padding: 0 10px;
  height: 40px;
  width: 100%;
`

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.6;
  color: #000;
  :hover {
    opacity: 1;
  }
`
