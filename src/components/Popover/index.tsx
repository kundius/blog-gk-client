import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { usePopper } from 'react-popper'
import { Placement } from '@popperjs/core'
import ReactDOM from 'react-dom'
import { useTimeout } from 'rooks'

export interface RenderFunctionArgs<HandleType> {
  referenceElement: HandleType | null
  setReferenceElement: (el: HandleType) => void
  hoverListeners: Pick<React.DOMAttributes<HandleType>, 'onMouseEnter' | 'onMouseLeave'>,
  clickListeners: Pick<React.DOMAttributes<HandleType>, 'onClick'>,
  show: Function
  hide: Function
  toggle: Function
}

export type RenderFunction<HandleType> = (api: RenderFunctionArgs<HandleType>) => React.ReactElement

export interface PopoverProps<HandleType> {
  children: RenderFunction<HandleType>
  title?: RenderFunction<HandleType> | string | React.ReactNode
  content?: RenderFunction<HandleType> | string | React.ReactNode
  showClose?: boolean
  usePortal?: boolean
  placement?: Placement
  size?: 's' | 'm' | 'l'
  wrapperStyle?: React.CSSProperties
}

const isVisible = (el: HTMLElement) => !!el && !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)

const calculateOffset = (size): [number, number] => {
  if (size === 's') {
    return [-8, 8]
  }
  if (size === 'l') {
    return [-24, 24]
  }
  if (size === 'm') {
    return [-16, 16]
  }
  return [-16, 16]
}

export function Popover<HandleType extends HTMLElement> ({
  children,
  title,
  content,
  showClose,
  usePortal = true,
  placement = 'bottom',
  size = 'm',
  wrapperStyle = {}
}: PopoverProps<HandleType>) {
  const showTimeout = useTimeout(show, 300)
  const hideTimeout = useTimeout(hide, 200)
  const [clamp, setClamp] = useState(true)
  const [referenceElement, setReferenceElement] = useState<HandleType | null>(null)
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
  const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const { styles, attributes, forceUpdate } = usePopper(referenceElement, popperElement, {
    placement: placement,
    modifiers: [{
      name: 'offset',
      options: {
        offset: calculateOffset(size)
      }
    }, {
      name: 'flip'
    }, {
      name: 'arrow',
      options: { element: arrowElement }
    }]
  })

  const hoverListeners = {
    onMouseEnter: () => {
      hideTimeout.clear()
      showTimeout.start()
      setClamp(false)
    },
    onMouseLeave: () => {
      showTimeout.clear()
      hideTimeout.start()
      setClamp(false)
    }
  }

  const clickListeners = {
    onClick: () => {
      toggle()
      setClamp(true)
    }
  }

  const wrapperListeners = {
    onMouseEnter: () => {
      if (clamp) return
      hideTimeout.clear()
      show()
    },
    onMouseLeave: () => {
      if (clamp) return
      hideTimeout.start()
    }
  }

  useEffect(() => {
    if (isOpen) {
      // обновить позицию при открытии
      forceUpdate?.()
      // старый добрый костыль, дождемся завершения клика изменившего isOpen
      setTimeout(addOutsideClickListener)
    }
    return removeOutsideClickListener
  }, [isOpen])

  function show () {
    setIsOpen(true)
  }

  function hide () {
    setIsOpen(false)
  }

  function toggle () {
    setIsOpen(prev => !prev)
  }

  const outsideClickListener = (e: MouseEvent) => {
    if (
      popperElement &&
      !popperElement.contains(e.target as Node) &&
      isVisible(popperElement) &&
      referenceElement &&
      !referenceElement.contains(e.target as Node) &&
      referenceElement !== e.target
    ) {
      hide()
    }
  }

  const removeOutsideClickListener = () => {
    document.removeEventListener('click', outsideClickListener)
  }

  const addOutsideClickListener = () => {
    document.addEventListener('click', outsideClickListener)
  }

  const api: RenderFunctionArgs<HandleType> = {
    referenceElement,
    setReferenceElement,
    hoverListeners,
    clickListeners,
    show,
    hide,
    toggle
  }

  const html = (
    <Wrapper
      ref={setPopperElement}
      style={{
        ...styles.popper,
        ...wrapperStyle
      }}
      {...attributes.popper}
      isOpen={isOpen}
      size={size}
      {...wrapperListeners}
    >
      {((typeof showClose === 'undefined' && clamp) || showClose) && (
        <Close onClick={hide} />
      )}
      {title && (
        <Title>{typeof title === 'function' ? title(api) : title}</Title>
      )}
      {content && (
        <Content>{typeof content === 'function' ? content(api) : content}</Content>
      )}
      <Arrow ref={setArrowElement} style={styles.arrow} />
    </Wrapper>
  )

  return (
    <>
      {children(api)}
      {!usePortal && html}
      {(typeof document !== 'undefined' && usePortal) && ReactDOM.createPortal(html, document.body)}
    </>
  )
}

const Arrow = styled.div`
  transition: border-color 300ms ease-out;
`

const Close = styled.button`
  width: 16px;
  height: 16px;
  top: 6px;
  right: 6px;
  border: none;
  background: transparent;
  position: absolute;
  cursor: pointer;
  border-radius: 2px;
  padding: 0;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    height: 1px;
    width: 100%;
    background-color: currentColor;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
`

const Title = styled.div`
  color: currentColor;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 12px;
  overflow: hidden;
`

const Content = styled.div`
  color: currentColor;
  font-size: 13px;
  line-height: 1.285;
  font-weight: normal;
  text-transform: none;
  p {
    margin: 0;
  }
  * + p {
    margin-top: 12px;
  }
`

const Wrapper = styled.div<{
  isOpen: boolean,
  size: 's' | 'm' | 'l'
}>`
  border-radius: 6px;
  padding: 16px;
  max-width: 260px;
  z-index: 1050;
  background: ${props => props.theme.colorMode === 'dark' ? '#6b7280' : '#ffffff'};
  box-shadow: ${props => props.theme.colorMode === 'dark' ? 'rgb(255 255 255 / 2%) 0px -5.9px 2.7px, rgb(255 255 255 / 2%) 0px -1.2px 6.9px, rgb(255 255 255 / 3%) 0px 8px 14.2px, rgb(255 255 255 / 4%) 0px 21.9px 29.2px, rgb(255 255 255 / 7%) 0px 49px 80px' : 'rgb(0 0 0 / 2%) 0px -5.9px 2.7px, rgb(0 0 0 / 2%) 0px -1.2px 6.9px, rgb(0 0 0 / 3%) 0px 8px 14.2px, rgb(0 0 0 / 4%) 0px 21.9px 29.2px, rgb(0 0 0 / 7%) 0px 49px 80px'};
  transition: background 300ms ease-out, box-shadow 300ms ease-out, visibility 300ms ease-out-in-out, opacity 300ms ease-out-in-out;
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  &[data-popper-placement^="bottom"] > ${Arrow} {
    top: -16px;
    border-width: 0 16px 16px 16px;
    border-color: transparent transparent ${props => props.theme.colorMode === 'dark' ? '#6b7280' : '#ffffff'} transparent;
    filter: ${props => props.theme.colorMode === 'dark' ? 'drop-shadow(0px -4px 4px rgb(255 255 255 / 8%))' : 'drop-shadow(0px -4px 4px rgb(0 0 0 / 8%))'};
  }
  &[data-popper-placement^="right"] > ${Arrow} {
    left: -16px;
    border-width: 16px 16px 16px 0;
    border-color: transparent ${props => props.theme.colorMode === 'dark' ? '#6b7280' : '#ffffff'} transparent transparent;
  }
  &[data-popper-placement^="top"] > ${Arrow} {
    bottom: -16px;
    border-width: 16px 16px 0 16px;
    border-color: ${props => props.theme.colorMode === 'dark' ? '#6b7280' : '#ffffff'} transparent transparent transparent;
    filter: ${props => props.theme.colorMode === 'dark' ? 'drop-shadow(0px 4px 4px rgb(255 255 255 / 8%))' : 'drop-shadow(0px -4px 4px rgb(0 0 0 / 8%))'};
  }
  &[data-popper-placement^="left"] > ${Arrow} {
    right: -16px;
    border-width: 16px 0 16px 16px;
    border-color: transparent transparent transparent ${props => props.theme.colorMode === 'dark' ? '#6b7280' : '#ffffff'};
  }
  ${props => {
    if (props.size === 's') {
      return css`
        border-radius: 4px;
        padding: 10px;
        max-width: 180px;
        &[data-popper-placement^="bottom"] > ${Arrow} {
          top: -8px;
          border-width: 0 8px 8px 8px;
        }
        &[data-popper-placement^="right"] > ${Arrow} {
          left: -8px;
          border-width: 8px 8px 8px 0;
        }
        &[data-popper-placement^="top"] > ${Arrow} {
          bottom: -8px;
          border-width: 8px 8px 0 8px;
        }
        &[data-popper-placement^="left"] > ${Arrow} {
          right: -8px;
          border-width: 8px 0 8px 8px;
        }
        ${Content} {
          font-size: 11px;
          * + p {
            margin-top: 8px;
          }
        }
        ${Title} {
          font-size: 10px;
          margin-bottom: 8px;
        }
        ${Close} {
          width: 12px;
          height: 12px;
          top: 4px;
          right: 4px;
        }
      `
    }
    if (props.size === 'l') {
      return css`
        border-radius: 8px;
        padding: 24px;
        max-width: 340px;
        &[data-popper-placement^="bottom"] > ${Arrow} {
          top: -24px;
          border-width: 0 24px 24px 24px;
        }
        &[data-popper-placement^="right"] > ${Arrow} {
          left: -24px;
          border-width: 24px 24px 24px 0;
        }
        &[data-popper-placement^="top"] > ${Arrow} {
          bottom: -24px;
          border-width: 24px 24px 0 24px;
        }
        &[data-popper-placement^="left"] > ${Arrow} {
          right: -24px;
          border-width: 24px 0 24px 24px;
        }
        ${Content} {
          font-size: 14px;
          * + p {
            margin-top: 16px;
          }
        }
        ${Title} {
          font-size: 13px;
          margin-bottom: 16px;
        }
        ${Close} {
          width: 18px;
          height: 18px;
          top: 10px;
          right: 10px;
        }
      `
    }
  }}
`
