import React, { useState, useContext, useEffect, useRef } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { Helmet } from 'react-helmet'
import { DateTime } from 'luxon'
import { AiOutlineTag } from 'react-icons/ai'
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

import { Content } from '@components/Content'
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

import { Hits } from './Hits'
import * as api from './api'
import * as styles from './styles.module.css'

const { publicRuntimeConfig } = getRuntimeConfig()

interface ArticlePageProps {
  alias: string
}

export function ArticlePage ({
  alias
}: ArticlePageProps) {
  const preload = useContext(PreloadContext)

  const [key, fetcher] = api.getArticle({ alias })
  const { data: result } = useSWR<api.GetArticleData>(key, fetcher, {
    initialData: preload[key]
  })

  let previousApi: api.GetPreviousResult | undefined
  let nextApi: api.GetNextResult | undefined
  if (result?.data) {
    previousApi = api.getPrevious({
      id: result.data.id,
      date: result.data.date_created
    })
    nextApi = api.getNext({
      id: result.data.id,
      date: result.data.date_created
    })
  }

  const { data: previousResult } = useSWR<api.GetPreviousData>(() => previousApi?.[0] || null, previousApi?.[1] || null)
  const { data: nextResult } = useSWR<api.GetNextData>(() => nextApi?.[0] || null, nextApi?.[1] || null)

  return (
    <WideLayout>
      <Helmet>
        <title>{result?.data?.seo_title || result?.data?.name}</title>
        <meta name="description" content={result?.data?.seo_keywords} />
        <meta name="keywords" content={result?.data?.seo_description} />
      </Helmet>
      {result?.data && (
        <div className="grid gap-24">
          <div className="max-w-2xl ml-auto mr-auto">
            <div className="mb-8 flex gap-4 justify-around items-center tracking-wide">
              <div className="text-xs uppercase text-red-400">
                <Link href={`/${result.data.category.section.alias}`} passHref>
                  <a className="hover:text-red-400">{result.data.category.section.name}</a>
                </Link>
                <span className="ml-1 mr-1">/</span>
                <Link href={`/${result.data.category.section.alias}/${result.data.category.alias}`} passHref>
                  <a className="hover:text-red-400">{result.data.category.name}</a>
                </Link>
              </div>
              <div className="text-xs text-gray-400 whitespace-nowrap">
                {DateTime.fromISO(result.data.date_created).setLocale('ru').toFormat('DDD').replace(' г.', '')}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl text-center font-bold tracking-wide">
              {result.data.name}
            </h1>

            <div className="transition duration-300 ease-out border-b border-gray-200 dark:border-gray-600 mt-14 pb-2 flex items-center gap-8 justify-between">
              <div className="flex items-center gap-8">
                {result.data.cooking_time && (
                  <div className="flex items-center gap-2">
                    <div className="transition duration-300 ease-out text-lg text-gray-600 dark:text-gray-200">
                      <ToqueIcon />
                    </div>
                    <div className="text-xs uppercase">
                      {result.data.cooking_time}
                    </div>
                  </div>
                )}
                {result.data.portion_count && (
                  <div className="flex items-center gap-2">
                    <div className="transition duration-300 ease-out text-lg text-gray-600 dark:text-gray-200">
                      <ClocheIcon />
                    </div>
                    <div className="text-xs uppercase">
                      {result.data.portion_count || 0}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-8">
                <Hits
                  id={result.data.id}
                  initialHits={result.data.hits_count || 0}
                />
                <a href={`#comments`} className="flex items-center gap-8">
                  <span className="flex items-center gap-2">
                    <span className="transition duration-300 ease-out text-lg text-gray-600 dark:text-gray-200">
                      <CommentsIcon />
                    </span>
                    <span className="text-xs uppercase">
                      {result.data.comments_count || 0}
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {result.data.thumbnail && (
              <figure className="mt-8 mb-8 overflow-hidden">
                <Image
                  src={`${publicRuntimeConfig.API_URL}/assets/${result.data.thumbnail?.filename_disk}`}
                  alt={result.data.thumbnail?.title}
                  blurHash={result.data.thumbnail.blurhash}
                  width={675}
                  height={(675 / result.data.thumbnail.width * result.data.thumbnail.height)}
                  objectFit="cover"
                  layout="responsive"
                />
              </figure>
            )}

            {result.data.ingredients && (
              <div className="mt-8 mb-16">
                <Ingredients items={result.data.ingredients} />
              </div>
            )}

            <Content dangerouslySetInnerHTML={{ __html: result.data.content }} />

            <div className={`${styles.Advert} mt-16`}>
              <div
                dangerouslySetInnerHTML={{ __html: `
                  <!-- Yandex.RTB R-A-518351-3 -->
                  <div id="yandex_rtb_R-A-518351-3"></div>
                  <script type="text/javascript">
                      (function(w, d, n, s, t) {
                          w[n] = w[n] || [];
                          w[n].push(function() {
                              Ya.Context.AdvManager.render({
                                  blockId: "R-A-518351-3",
                                  renderTo: "yandex_rtb_R-A-518351-3",
                                  async: true
                              });
                          });
                          t = d.getElementsByTagName("script")[0];
                          s = d.createElement("script");
                          s.type = "text/javascript";
                          s.src = "//an.yandex.ru/system/context.js";
                          s.async = true;
                          t.parentNode.insertBefore(s, t);
                      })(this, this.document, "yandexContextAsyncCallbacks");
                  </script>
                ` }}
              />
            </div>

            {result.data.tags?.[0] && (
              <div className="flex items-start leading-none mt-16">
                <div className="flex items-center">
                  <AiOutlineTag />
                  <div className="text-sm ml-2">
                    Теги
                  </div>
                </div>
                <div className="ml-4 flex flex-wrap text-sm text-gray-400 uppercase gap-1">
                  {result.data.tags.map(item => (
                    <a key={item.tag.alias}>#{item.tag.name}</a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="transition duration-300 ease-out flex flex-col md:flex-row items-center justify-between gap-4 pt-4 pb-4 border-t border-b border-gray-200 dark:border-gray-600">
            <div className="flex items-center gap-8">
              <div className="text-sm leading-none text-gray-400 hidden lg:block">
                Понравилась статья?<br />
                Поделись с друзьями
              </div>
              <div className="flex gap-2">
                <FacebookShareButton url={`/${result.data.category.section.alias}/${result.data.category.alias}/${result.data.alias}`}>
                  <FacebookIcon size={32} borderRadius={32} />
                </FacebookShareButton>
                <TwitterShareButton url={`/${result.data.category.section.alias}/${result.data.category.alias}/${result.data.alias}`}>
                  <TwitterIcon size={32} borderRadius={32} />
                </TwitterShareButton>
                <VKShareButton url={`/${result.data.category.section.alias}/${result.data.category.alias}/${result.data.alias}`}>
                  <VKIcon size={32} borderRadius={32} />
                </VKShareButton>
                <OKShareButton url={`/${result.data.category.section.alias}/${result.data.category.alias}/${result.data.alias}`}>
                  <OKIcon size={32} borderRadius={32} />
                </OKShareButton>
                <TelegramShareButton url={`/${result.data.category.section.alias}/${result.data.category.alias}/${result.data.alias}`}>
                  <TelegramIcon size={32} borderRadius={32} />
                </TelegramShareButton>
                {result.data.thumbnail && (
                  <PinterestShareButton url={`/${result.data.category.section.alias}/${result.data.category.alias}/${result.data.alias}`} media={`${publicRuntimeConfig.API_URL}/assets/${result.data.thumbnail.filename_disk}`}>
                    <PinterestIcon size={32} borderRadius={32} />
                  </PinterestShareButton>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              {previousResult?.data && (
                <Link href={`/${previousResult.data.category.section.alias}/${previousResult.data.category.alias}/${previousResult.data.alias}`} passHref>
                  <a rel="prev" className="flex items-center bg-red-400 hover:bg-red-600 text-white text-xs md:text-sm md:tracking-widest leading-8 md:leading-8 uppercase px-5 rounded-full" title={previousResult.data.name}>
                    <HiOutlineChevronDoubleLeft className="mr-1" />
                    Предыдущая
                  </a>
                </Link>
              )}
              {nextResult?.data && (
                <Link href={`/${nextResult.data.category.section.alias}/${nextResult.data.category.alias}/${nextResult.data.alias}`} passHref>
                  <a rel="prev" className="flex items-center bg-red-400 hover:bg-red-600 text-white text-xs md:text-sm md:tracking-widest leading-8 md:leading-8 uppercase px-5 rounded-full" title={nextResult.data.name}>
                    Следующая
                    <HiOutlineChevronDoubleRight className="mr-1" />
                  </a>
                </Link>
              )}
            </div>
          </div>
          
          <ArticleRelated
            id={result.data.id}
          />
          
          <Comments
            threadId={result.data.id}
            threadType="articles"
          />
        </div>
      )}
    </WideLayout>
  )
}
