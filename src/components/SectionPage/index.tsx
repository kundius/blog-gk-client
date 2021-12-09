import React, { useState, useContext, useEffect, useRef } from 'react'
import useSWR from 'swr'
import Head from 'next/head'
import { DateTime } from 'luxon'

import { Pagination } from '@components/Pagination'
import { ArticleCardMain } from '@components/ArticleCardMain'
import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'
import { MainLayout } from '@components/MainLayout'
import { PreloadContext } from '@components/PreloadContext'

import * as api from './api'

const { publicRuntimeConfig } = getRuntimeConfig()

interface SectionPageProps {
  alias: string
}

export function SectionPage({ alias }: SectionPageProps) {
  const preload = useContext(PreloadContext)

  const listRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)

  useEffect(() => {
    if (mounted) {
      scrollToList()
    }
    setMounted(true)
  }, [page])

  useEffect(() => {
    setPage(1)
  }, [alias])

  const [keySection, fetcherSection] = api.getSection({
    alias
  })

  const { data: sectionResult } = useSWR<api.GetSectionData>(
    keySection,
    fetcherSection,
    {
      initialData: preload[keySection]
    }
  )

  const [keyArticles, fetcherArticles] = api.getArticles({
    alias,
    limit,
    page
  })

  const { data: articlesResult } = useSWR<api.GetArticlesData>(
    keyArticles,
    fetcherArticles,
    {
      initialData: preload[keyArticles]
    }
  )

  function scrollToList() {
    if (listRef.current) {
      listRef.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
    }
  }

  return (
    <MainLayout>
      <Head>
        <title>
          {sectionResult?.data?.seo_title || sectionResult?.data?.name}
        </title>
        <meta
          name="description"
          content={sectionResult?.data?.seo_description}
        />
        <meta name="keywords" content={sectionResult?.data?.seo_keywords} />

        <link
          rel="canonical"
          href={`${publicRuntimeConfig.CLIENT_URL}/${sectionResult?.data?.alias}`}
        />
      </Head>

      <div
        className="grid gap-32"
        ref={listRef}
        style={{
          scrollMarginTop: 80
        }}
      >
        {(articlesResult?.data?.length || 0) === 0 && (
          <div className="text-center text-xl">
            Записи в данном разделе отсутствуют
          </div>
        )}

        {articlesResult?.data?.map((article) => (
          <div key={article.id} className="max-w-2xl w-full mx-auto">
            <ArticleCardMain
              id={article.id}
              name={article.name}
              portionCount={article.portion_count}
              cookingTime={article.cooking_time}
              commentsCount={article.comments_count || 0}
              hitsCount={article.hits_count || 0}
              likesCount={article.likes_count || 0}
              excerpt={article.excerpt}
              createdAt={DateTime.fromISO(article.date_created)
                .setLocale('ru')
                .toFormat('DDD')
                .replace(' г.', '')}
              thumbnail={
                article.thumbnail
                  ? {
                      name: article.thumbnail?.title,
                      blurHash: article.thumbnail?.blurhash,
                      url: `${publicRuntimeConfig.API_URL}/assets/${article.thumbnail?.filename_disk}`
                    }
                  : undefined
              }
              url={`/${article.category.section.alias}/${article.category.alias}/${article.alias}`}
              category={{
                name: article.category.name,
                url: `/${article.category.section.alias}/${article.category.alias}`
              }}
            />
          </div>
        ))}

        {(articlesResult?.meta?.filter_count || 0) > limit && (
          <Pagination
            current={page}
            total={articlesResult?.meta?.filter_count}
            pageSize={limit}
            onChange={setPage}
          />
        )}
      </div>
    </MainLayout>
  )
}
