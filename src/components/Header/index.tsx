import React, { useState, useEffect, useContext, useRef } from 'react'
import { FaRss } from 'react-icons/fa'
import { useSpring, animated } from 'react-spring'
import { throttle } from 'throttle-debounce'
// import Link from 'next/link'

import { Container } from '@components/Container'
import { HeaderMenu } from '@components/HeaderMenu'
import { MobileMenu } from '@components/MobileMenu'
import { ThemeContext } from '@components/ThemeContext'

import { useLightToggle } from './useLightToggle'
import { Search } from './Search'
import * as styles from './styles'

export const Header = () => {
  const [isFixed, setIsFixed] = useState(false)
  const { colorMode, setColorMode } = useContext(ThemeContext)
  const lightToggle = useLightToggle({ theme: colorMode })
  const headerSpring = useSpring({
    y: isFixed ? 0 : -100
  })

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler)
    return () => {
      window.removeEventListener('scroll', onScrollHandler)
    }
  }, [])

  const onScroll = () => {
    setIsFixed(window.pageYOffset > 300)
  }

  const onScrollHandler = throttle(100, onScroll)

  const handleToggleTheme = () => {
    setColorMode?.(colorMode === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <styles.Placeholder className={isFixed ? 'block' : 'hidden'} />
      <styles.Wrapper
        className={isFixed ? 'isHeaderFixed' : undefined}
        as={animated.div}
        style={{
          transform: isFixed ? headerSpring.y.to(y => `translateY(${y}%)`) : undefined
        }}
      >
        <Container>
          <styles.Inner>
            <styles.Search>
              <Search />
            </styles.Search>
            <styles.Buttons>
              {colorMode && (
                <styles.Button onClick={handleToggleTheme}>
                  {lightToggle}
                </styles.Button>
              )}
              <a href="/rss" target="_blank">
                <styles.Button>
                  <FaRss />
                </styles.Button>
              </a>
            </styles.Buttons>
            <HeaderMenu />
            <styles.Slogan>
              АВТОРСКИЙ БЛОГ
            </styles.Slogan>
          </styles.Inner>
        </Container>
      </styles.Wrapper>
      <MobileMenu />
    </>
  )
}
