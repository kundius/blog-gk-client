import styled from 'styled-components'

export const Wrapper = styled.div`
`

export const SectionName = styled.span`
  letter-spacing: 1px;
  font-size: 12px;
  text-transform: uppercase;
  border-bottom: 1px solid currentColor;
`

export const SectionIcon = styled.span`
  font-size: 16px;
`

export const Section = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1;
  :hover {
    ${SectionIcon} {
      color: var(--color-text);
    }
    ${SectionName} {
      border-bottom-color: transparent;
    }
  }
`

export const List = styled.ul`
  margin-top: 16px;
  line-height: 1;
  li {

  }
  li + li {
    margin-top: 12px;
  }
  a {
    color: #c66;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    :hover {
      color: #c00;
    }
  }
`
