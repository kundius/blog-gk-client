import React, { useContext } from 'react'
import useSWR from 'swr'
import { DateTime } from 'luxon'

import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'
import { ArticleCardRelated } from '@components/ArticleCardRelated'
import { PreloadContext } from '@components/PreloadContext'

import * as api from './api'

const { publicRuntimeConfig } = getRuntimeConfig()

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min)
  return Math.floor(rand)
}

interface ArticleRelatedProps {
  id: string
}

export function ArticleRelated ({ id }: ArticleRelatedProps) {
  const preload = useContext(PreloadContext)

  const [relatedKey, relatedFetcher] = api.getRelated({
    id,
    limit: 2
  })

  const { data: relatedResult } = useSWR<api.GetRelatedData>(relatedKey, relatedFetcher, {
    initialData: preload[relatedKey]
  })

  if (!relatedResult?.data || relatedResult.data.length === 0) return null

  const items = relatedResult.data.map(item => (
    <ArticleCardRelated
      key={item.alias}
      name={item.name}
      excerpt={item.excerpt}
      createdAt={DateTime.fromISO(item.date_created).setLocale('ru').toFormat('DDD')}
      thumbnail={
        item.thumbnail
          ? {
              name: item.thumbnail?.title,
              blurHash: item.thumbnail?.blurhash,
              url: `${publicRuntimeConfig.API_URL}/assets/${item.thumbnail?.filename_disk}`
            }
          : undefined
      }
      url={`/${item.category.section.alias}/${item.category.alias}/${item.alias}`}
      category={{
        name: item.category.name,
        url: `/${item.category.section.alias}/${item.category.alias}`
      }}
    />
  ))

  items.splice(randomInteger(0, relatedResult.data.length), 0, <div>Реклама 1</div>)

  return (
    <section>
      <div className="mb-12 text-gray-400 text-5xl">Смотрите также</div>
      <div className="grid grid-cols-3 gap-8">
        {items}
      </div>
    </section>
  )
}
