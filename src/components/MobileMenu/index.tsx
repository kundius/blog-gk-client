import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import { FaRss } from 'react-icons/fa'

import { ThemeContext } from '@components/ThemeContext'
import { useLightToggle } from '@components/Header/useLightToggle'

import * as styles from './styles'

export const MobileMenu = () => {
  const [isShowMenu, setIsShowMenu] = useState(false)
  const { colorMode, setColorMode } = useContext(ThemeContext)
  const lightToggle = useLightToggle({ theme: colorMode })

  const handleToggleTheme = () => {
    setColorMode?.(colorMode === 'dark' ? 'light' : 'dark')
  }

  const handleToggleMenu = () => {
    setIsShowMenu(prev => !prev)
  }

  return (
    <>
      <styles.Drawer isVisible={isShowMenu}>
        <styles.List>
          <li>
            <Link href="/pages/about" passHref>
              <a>Обо мне</a>
            </Link>
          </li>
          <li>
            <Link href="/cooking" passHref>
              <a>Кулинария</a>
            </Link>
            <styles.SecondList>
              <li>
                <Link href="/cooking/krem-i-glazur-dlya-tortov" passHref>
                  <a>Крем и глазурь для тортов</a>
                </Link>
              </li>
              <li>
                <Link href="/cooking/cakes" passHref>
                  <a>Торты, пироги и пирожные</a>
                </Link>
              </li>
              <li>
                <Link href="/cooking/drinks" passHref>
                  <a>Напитки и десерты</a>
                </Link>
              </li>
              <li>
                <Link href="/cooking/salads" passHref>
                  <a>Салаты и закуски</a>
                </Link>
              </li>
              <li>
                <Link href="/cooking/conservation" passHref>
                  <a>Консервация</a>
                </Link>
              </li>
              <li>
                <Link href="/cooking/baking" passHref>
                  <a>Выпечка</a>
                </Link>
              </li>
              <li>
                <Link href="/cooking/cookies" passHref>
                  <a>Печенье</a>
                </Link>
              </li>
              <li>
                <Link href="/cooking/main-dishes" passHref>
                  <a>Вторые блюда</a>
                </Link>
              </li>
              <li>
                <Link href="/cooking/entrees" passHref>
                  <a>Первые блюда</a>
                </Link>
              </li>
              <li>
                <Link href="/cooking/fish-dishes" passHref>
                  <a>Рыбные блюда</a>
                </Link>
              </li>
            </styles.SecondList>
          </li>
          <li>
            <Link href="/article/temples" passHref>
              <a>Храмы</a>
            </Link>
          </li>
          <li>
            <Link href="/notes" passHref>
              <a>Заметки</a>
            </Link>
            <styles.SecondList>
              <li>
                <Link href="/notes/zametki-o-vtoryh-blyudah" passHref>
                  <a>Вторые блюда</a>
                </Link>
              </li>
              <li>
                <Link href="/notes/zametki-o-vypechke" passHref>
                  <a>Выпечка</a>
                </Link>
              </li>
              <li>
                <Link href="/notes/zametki-o-pervyh-blyudah" passHref>
                  <a>Первые блюда</a>
                </Link>
              </li>
              <li>
                <Link href="/notes/useful-tips" passHref>
                  <a>Полезные советы</a>
                </Link>
              </li>
              <li>
                <Link href="/notes/zametki-o-napitkah" passHref>
                  <a>Заметки о напитках</a>
                </Link>
              </li>
            </styles.SecondList>
          </li>
          <li>
            <Link href="/article" passHref>
              <a>Статьи</a>
            </Link>
            <styles.SecondList>
              <li>
                <Link href="/article/supernatural" passHref>
                  <a>Сверхъестественное</a>
                </Link>
              </li>
              <li>
                <Link href="/article/relationship" passHref>
                  <a>Отношения</a>
                </Link>
              </li>
              <li>
                <Link href="/article/subsection-2" passHref>
                  <a>Жизненные истории</a>
                </Link>
              </li>
            </styles.SecondList>
          </li>
          <li>
            <Link href="/albums" passHref>
              <a>Альбомы</a>
            </Link>
          </li>
        </styles.List>
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
      </styles.Drawer>
      <styles.Toggle
        onClick={handleToggleMenu}
        isActive={isShowMenu}
      />
    </>
  )
}
