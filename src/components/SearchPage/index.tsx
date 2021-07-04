import React, { useState, useContext, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { MainLayout } from '@components/MainLayout'
import { Breadcrumbs } from '@components/Breadcrumbs'
import { Pagination } from '@components/Pagination'

import { Form } from './Form'
import { Card } from './Card'
import * as api from './api'

export function SearchPage () {
  const router = useRouter()

  const listRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(20)

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
        className="grid gap-12 mt-16"
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

        {searchResult?.data?.map(id => (
          <Card
            key={id}
            id={id}
          />
        ))}

        {(searchResult?.meta?.search_count || 0) > limit && (
          <Pagination
            current={page}
            total={searchResult?.meta?.search_count}
            pageSize={limit}
            onChange={setPage}
          />
        )}
      </div>
    </MainLayout>
  )
}
