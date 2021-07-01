import React, { useState, useContext, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import { DateTime } from 'luxon'

import { MainLayout } from '@components/MainLayout'
import { Breadcrumbs } from '@components/Breadcrumbs'
import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'
import { Pagination } from '@components/Pagination'
import { ArticleCardMain } from '@components/ArticleCardMain'

import { Form } from './Form'
import * as api from './api'

const { publicRuntimeConfig } = getRuntimeConfig()

export function SearchPage () {
  const router = useRouter()

  const listRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)

  useEffect(() => {
    if (mounted) {
      scrollToList()
    }
    setMounted(true)
  }, [page])

  useEffect(() => {
    setPage(1)
  }, [router.query.q])

  let searchApi: api.SearchResult | undefined
  if (router.query.q) {
    searchApi = api.Search({
      search: String(router.query.q),
      limit,
      page
    })
  }

  const { data: searchResult } = useSWR<api.SearchData>(() => searchApi?.[0] || null, searchApi?.[1] || null)

  function scrollToList () {
    if (listRef.current) {
      listRef.current.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
    }
  }

  console.log(searchResult)

  return (
    <MainLayout>
      <Breadcrumbs
        items={[{
          title: 'Главная',
          href: '/'
        }, {
          title: `Поиск «${router.query.q || '...'}»`
        }]}
      />

      <h1 className="mb-8 mt-16">Поиск</h1>

      <Form />

      <div
        className="grid gap-32 mt-16"
        ref={listRef}
        style={{
          scrollMarginTop: 80
        }}
      >
        {(searchResult?.data?.length || 0) === 0 && (
          <div className="text-center text-xl">
            По вашему запросу ничего не найдено
          </div>
        )}

        {searchResult?.data?.map(article => (
          <ArticleCardMain
            key={article.alias}
            name={article.name}
            portionCount={article.portion_count}
            cookingTime={article.cooking_time}
            commentsCount={article.comments_count || 0}
            excerpt={article.excerpt}
            createdAt={DateTime.fromISO(article.date_created).setLocale('ru').toFormat('DDD')}
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
        ))}

        {(searchResult?.meta?.filter_count || 0) > limit && (
          <Pagination
            current={page}
            total={searchResult?.meta?.filter_count}
            pageSize={limit}
            onChange={setPage}
          />
        )}
      </div>
    </MainLayout>
  )
}
