import React, { useState, useContext, useEffect, useRef } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { Helmet } from 'react-helmet'
import { DateTime } from 'luxon'
import { AiOutlineTag } from 'react-icons/ai'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from 'react-icons/hi'
import {
  FacebookShareButton,
  FacebookIcon,
  OKShareButton,
  OKIcon,
  PinterestShareButton,
  PinterestIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  VKShareButton,
  VKIcon
} from 'react-share'

import { Image } from '@components/Image'
import { ClocheIcon } from '@components/Icon/cloche'
import { ToqueIcon } from '@components/Icon/toque'
import { CommentsIcon } from '@components/Icon/comments'
import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'
import { WideLayout } from '@components/WideLayout'
import { PreloadContext } from '@components/PreloadContext'
import { ArticleRelated } from '@components/ArticleRelated'
import { Comments } from '@components/Comments'
import { Ingredients } from '@components/Ingredients'

import * as api from './api'
import * as styles from './styles'

const { publicRuntimeConfig } = getRuntimeConfig()

interface ArticlePageProps {
  alias: string
}

export function ArticlePage ({
  alias
}: ArticlePageProps) {
  const preload = useContext(PreloadContext)

  const [articleKey, articleFetcher] = api.getArticle({
    alias
  })

  const { data: articleResult } = useSWR<api.GetArticleData>(articleKey, articleFetcher, {
    initialData: preload[articleKey]
  })

  let previousApi: api.GetPreviousResult | undefined
  let nextApi: api.GetNextResult | undefined
  if (articleResult?.data) {
    previousApi = api.getPrevious({
      id: articleResult.data.id,
      date: articleResult.data.date_created
    })
    nextApi = api.getNext({
      id: articleResult.data.id,
      date: articleResult.data.date_created
    })
  }

  const { data: previousResult } = useSWR<api.GetPreviousData>(() => previousApi?.[0] || null, previousApi?.[1] || null)
  const { data: nextResult } = useSWR<api.GetNextData>(() => nextApi?.[0] || null, nextApi?.[1] || null)

  return (
    <WideLayout>
      <Helmet>
        <title>{articleResult?.data?.name}</title>
      </Helmet>
      {articleResult?.data && (
        <div className="grid gap-24">
          <div className="max-w-2xl ml-auto mr-auto">
            <div className="mb-8 flex justify-around items-center tracking-wide">
              <div className="flex gap-1 text-xs uppercase text-red-600">
                <Link href={`/${articleResult.data.category.section.alias}`} passHref>
                  <a className="hover:text-red-400">{articleResult.data.category.section.name}</a>
                </Link>
                /
                <Link href={`/${articleResult.data.category.section.alias}/${articleResult.data.category.alias}`} passHref>
                  <a className="hover:text-red-400">{articleResult.data.category.name}</a>
                </Link>
              </div>
              <div className="text-xs text-gray-400">
                {DateTime.fromISO(articleResult.data.date_created).setLocale('ru').toFormat('DDD')}
              </div>
            </div>

            <h1 className="text-5xl text-center font-bold tracking-wide">
              {articleResult.data.name}
            </h1>

            <div className="transition duration-300 ease-out border-b border-gray-200 dark:border-gray-600 mt-14 pb-2 flex items-center gap-8 justify-between">
              <div className="flex items-center gap-8">
                {articleResult.data.cooking_time && (
                  <div className="flex items-center gap-2">
                    <div className="transition duration-300 ease-out text-lg text-gray-600 dark:text-gray-200">
                      <ToqueIcon />
                    </div>
                    <div className="text-xs uppercase">
                      {articleResult.data.cooking_time}
                    </div>
                  </div>
                )}
                {articleResult.data.portion_count && (
                  <div className="flex items-center gap-2">
                    <div className="transition duration-300 ease-out text-lg text-gray-600 dark:text-gray-200">
                      <ClocheIcon />
                    </div>
                    <div className="text-xs uppercase">
                      {articleResult.data.portion_count || 0}
                    </div>
                  </div>
                )}
              </div>
              <a href={`#comments`} className="flex items-center gap-8">
                <span className="flex items-center gap-2">
                  <span className="transition duration-300 ease-out text-lg text-gray-600 dark:text-gray-200">
                    <CommentsIcon />
                  </span>
                  <span className="text-xs uppercase">
                    {articleResult.data.comments_count || 0}
                  </span>
                </span>
              </a>
            </div>

            {articleResult.data.thumbnail && (
              <figure className="mt-8 mb-8">
                <Image
                  src={`${publicRuntimeConfig.API_URL}/assets/${articleResult.data.thumbnail?.filename_disk}`}
                  alt={articleResult.data.thumbnail?.title}
                  blurHash={articleResult.data.thumbnail.blurhash}
                  width={675}
                  height={(675 / articleResult.data.thumbnail.width * articleResult.data.thumbnail.height)}
                  objectFit="cover"
                  layout="responsive"
                />
              </figure>
            )}

            {articleResult.data.ingredients && (
              <div className="mt-8 mb-16">
                <Ingredients items={articleResult.data.ingredients} />
              </div>
            )}

            <styles.Content dangerouslySetInnerHTML={{ __html: articleResult.data.content }} />

            <styles.Advert className="mt-16">
              Реклама
            </styles.Advert>

            {articleResult.data.tags && (
              <div className="flex items-start leading-none mt-16">
                <div className="flex items-center">
                  <AiOutlineTag />
                  <div className="text-sm ml-2">
                    Теги
                  </div>
                </div>
                <div className="ml-4 flex flex-wrap text-sm text-gray-400 uppercase gap-1">
                  {articleResult.data.tags.map(item => (
                    <a key={item.tag.alias}>#{item.tag.name}</a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="transition duration-300 ease-out flex items-center justify-between gap-8 pt-4 pb-4 border-t border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center gap-8">
              <div className="text-sm leading-none text-gray-400">
                Понравилась статья?<br />
                Поделись с друзьями
              </div>
              <div className="flex gap-2">
                <FacebookShareButton url={`/${articleResult.data.category.section.alias}/${articleResult.data.category.alias}/${articleResult.data.alias}`}>
                  <FacebookIcon size={32} borderRadius={6} />
                </FacebookShareButton>
                <TwitterShareButton url={`/${articleResult.data.category.section.alias}/${articleResult.data.category.alias}/${articleResult.data.alias}`}>
                  <TwitterIcon size={32} borderRadius={6} />
                </TwitterShareButton>
                <VKShareButton url={`/${articleResult.data.category.section.alias}/${articleResult.data.category.alias}/${articleResult.data.alias}`}>
                  <VKIcon size={32} borderRadius={6} />
                </VKShareButton>
                <OKShareButton url={`/${articleResult.data.category.section.alias}/${articleResult.data.category.alias}/${articleResult.data.alias}`}>
                  <OKIcon size={32} borderRadius={6} />
                </OKShareButton>
                <TelegramShareButton url={`/${articleResult.data.category.section.alias}/${articleResult.data.category.alias}/${articleResult.data.alias}`}>
                  <TelegramIcon size={32} borderRadius={6} />
                </TelegramShareButton>
                {articleResult.data.thumbnail && (
                  <PinterestShareButton url={`/${articleResult.data.category.section.alias}/${articleResult.data.category.alias}/${articleResult.data.alias}`} media={`${publicRuntimeConfig.API_URL}/assets/${articleResult.data.thumbnail.filename_disk}`}>
                    <PinterestIcon size={32} borderRadius={6} />
                  </PinterestShareButton>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {previousResult?.data && (
                <Link href={`/${previousResult.data.category.section.alias}/${previousResult.data.category.alias}/${previousResult.data.alias}`} passHref>
                  <a rel="prev" className="flex items-center bg-red-600 hover:bg-red-700 text-white text-sm tracking-widest leading-8 uppercase px-5 rounded-full" title={previousResult.data.name}>
                    <HiOutlineChevronDoubleLeft className="mr-1" />
                    Предыдущая
                  </a>
                </Link>
              )}
              {nextResult?.data && (
                <Link href={`/${nextResult.data.category.section.alias}/${nextResult.data.category.alias}/${nextResult.data.alias}`} passHref>
                  <a rel="prev" className="flex items-center bg-red-600 hover:bg-red-700 text-white text-sm tracking-widest leading-8 uppercase px-5 rounded-full" title={nextResult.data.name}>
                    Следующая
                    <HiOutlineChevronDoubleRight className="mr-1" />
                  </a>
                </Link>
              )}
            </div>
          </div>
          
          <ArticleRelated
            id={articleResult.data.id}
          />
          
          <Comments
            threadId={articleResult.data.id}
            threadType="articles"
          />
        </div>
      )}
    </WideLayout>
  )
}
