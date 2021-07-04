import React, { useState, useContext } from 'react'
import { AiOutlineCoffee } from 'react-icons/ai'
import { BsBook, BsPencilSquare } from 'react-icons/bs'
import { BiSitemap } from 'react-icons/bi'
import { useTrail, useSpring, animated } from 'react-spring'

import { Container } from '@components/Container'
import { FooterMenu } from '@components/FooterMenu'
import { TablewareIcon } from '@components/Icon/tableware'
import { ThemeContext } from '@components/ThemeContext'

import * as styles from './styles'

export const Footer = () => {
  return (
    <styles.Wrapper>
      <Container>
        <styles.Primary className="transition duration-300 ease-out flex justify-between items-start gap-12 border-t border-gray-200 dark:border-gray-600">
          <div>
            <FooterMenu
              section={{
                title: 'Кулинария',
                href: '/cooking',
                icon: <TablewareIcon />
              }}
              items={[{
                title: 'Крем и глазурь для тортов',
                href: '/cooking/krem-i-glazur-dlya-tortov'
              }, {
                title: 'Торты, пироги и пирожные',
                href: '/cooking/cakes'
              }, {
                title: 'Напитки и десерты',
                href: '/cooking/drinks'
              }, {
                title: 'Салаты и закуски',
                href: '/cooking/salads'
              }, {
                title: 'Консервация',
                href: '/cooking/conservation'
              }, {
                title: 'Выпечка',
                href: '/cooking/baking'
              }, {
                title: 'Печенье',
                href: '/cooking/cookies'
              }, {
                title: 'Вторые блюда',
                href: '/cooking/main-dishes'
              }, {
                title: 'Первые блюда',
                href: '/cooking/entrees'
              }, {
                title: 'Рыбные блюда',
                href: '/cooking/fish-dishes'
              }]}
            />
          </div>
          <div>
            <FooterMenu
              section={{
                title: 'Статьи',
                href: '/article',
                icon: <BsPencilSquare />
              }}
              items={[{
                title: 'Сверхъестественное',
                href: '/article/supernatural'
              }, {
                title: 'Отношения',
                href: '/article/relationship'
              }, {
                title: 'Жизненные истории',
                href: '/article/subsection-2'
              }]}
            />
          </div>
          <div>
            <FooterMenu
              section={{
                title: 'Заметки',
                href: '/notes',
                icon: <AiOutlineCoffee />
              }}
              items={[{
                title: 'Вторые блюда',
                href: '/notes/zametki-o-vtoryh-blyudah'
              }, {
                title: 'Выпечка',
                href: '/notes/zametki-o-vypechke'
              }, {
                title: 'Первые блюда',
                href: '/notes/zametki-o-pervyh-blyudah'
              }, {
                title: 'Полезные советы',
                href: '/notes/useful-tips'
              }, {
                title: 'Заметки о напитках',
                href: '/notes/zametki-o-napitkah'
              }]}
            />
          </div>
          <div>
            <FooterMenu
              section={{
                title: 'Альбомы',
                href: '#',
                icon: <BsBook />
              }}
              items={[{
                title: 'Природа',
                href: '#'
              }, {
                title: 'Храмы',
                href: '#'
              }, {
                title: 'Альбомы',
                href: '#'
              }]}
            />
          </div>
          <div>
            <FooterMenu
              section={{
                title: 'Карта сайта',
                href: '#',
                icon: <BiSitemap />
              }}
              items={[{
                title: 'Политика конфиденциальности',
                href: '/pages/privacy-policy'
              }, {
                title: 'Пользовательское соглашение',
                href: '/pages/user-agreement'
              }]}
            />
          </div>
        </styles.Primary>
        <styles.Secondary className="transition duration-300 ease-out border-t border-gray-200 dark:border-gray-600">
          <styles.Copyright className="text-gray-700 dark:text-gray-400">
            © {new Date().getFullYear()} Блог Галины Кундиус - Все о вкусной еде.<br />
            Копирование материалов сайта возможно только с указанием активной действующей ссылки на источник.
          </styles.Copyright>
          <styles.Creator href="http://domenart-studio.ru/" className="text-gray-700 dark:text-gray-400" target="_blank">
            <span>
              Разработка, поддержка и продвижение<br />
              веб-студии <b>ДоменАРТ</b>
            </span>
          </styles.Creator>
        </styles.Secondary>
      </Container>
    </styles.Wrapper>
  )
}
