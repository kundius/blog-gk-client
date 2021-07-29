import React from 'react'
import { AiOutlineCoffee } from 'react-icons/ai'
import { BsBook, BsPencilSquare } from 'react-icons/bs'
import { BiSitemap } from 'react-icons/bi'

import { Container } from '@components/Container'
import { FooterMenu } from '@components/FooterMenu'
import { TablewareIcon } from '@components/Icon/tableware'

import * as styles from './styles.module.css'

export const Footer = () => {
  return (
    <div className={styles.Wrapper}>
      <Container>
        <div className={`${styles.Primary} transition duration-300 ease-out flex flex-wrap lg:flex-nowrap justify-between items-start gap-12 border-t border-gray-200 dark:border-gray-600`}>
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
                href: '/albums',
                icon: <BsBook />
              }}
              items={[{
                title: 'Природа',
                href: '/albums/nature'
              }, {
                title: 'Храмы',
                href: '/albums/temples'
              }, {
                title: 'Альбомы',
                href: '/albums/stuff'
              }]}
            />
          </div>
          <div>
            <FooterMenu
              section={{
                title: 'Карта сайта',
                href: '/sitemap',
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
        </div>
        <div className={`${styles.Secondary} transition duration-300 ease-out border-t border-gray-200 dark:border-gray-600`}>
          <div className={`${styles.Copyright} text-gray-700 dark:text-gray-400`}>
            © {new Date().getFullYear()} Блог Галины Кундиус - Все о вкусной еде.<br />
            Копирование материалов сайта возможно только с&nbsp;указанием активной действующей ссылки на&nbsp;источник.
          </div>
          <div>
            <a
              href="https://metrika.yandex.ru/stat/?id=35935260&amp;from=informer"
              target="_blank"
              rel="nofollow"
            >
              <img
                src="https://informer.yandex.ru/informer/35935260/3_0_FFFFFFFF_EFEFEFFF_0_pageviews"
                style={{
                  width: 88,
                  height: 31,
                  border: 0
                }}
                alt="Яндекс.Метрика"
                title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
                className="ym-advanced-informer"
                data-cid="35935260"
                data-lang="ru"
              />
            </a>
          </div>
          <a
            href="http://domenart-studio.ru/"
            className={`${styles.Creator} text-gray-700 dark:text-gray-400`}
            target="_blank"
          >
            <span>
              Разработка, поддержка и продвижение<br />
              веб-студии <b>ДоменАРТ</b>
            </span>
          </a>
        </div>
      </Container>
    </div>
  )
}
