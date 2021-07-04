import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'
import queryString from 'query-string'

const { publicRuntimeConfig } = getRuntimeConfig()

export interface GetArticlesArgs {
  alias: string
  page: number
  limit: number
}

export interface GetArticlesData {
  meta: {
    filter_count: number
  }
  data: {
    alias: string
    name: string
    date_created: string
    portion_count?: string
    cooking_time?: string
    comments_count: number | null
    hits_count: number | null
    excerpt?: string
    category: {
      name: string
      alias: string
      section: {
        alias: string
      }
    }
    thumbnail?: {
      filename_disk: string
      title: string
      blurhash: string
    }
  }[]
}

export type GetArticlesResult = [string, (url: string) => Promise<GetArticlesData>]

export function getArticles ({
  alias,
  page,
  limit
}: GetArticlesArgs): GetArticlesResult {
  const params = queryString.stringify({
    'filter[category][section][alias][_eq]': alias,
    fields: 'alias,name,date_created,portion_count,cooking_time,excerpt,comments_count,hits_count,category.name,category.alias,category.section.alias,thumbnail.filename_disk,thumbnail.title,thumbnail.blurhash',
    limit,
    page,
    meta: 'filter_count'
  })
  const key = `${publicRuntimeConfig.API_URL}/items/articles?${params}`
  const fetcher = url => fetch(url).then(r => r.json())
  return [key, fetcher]
}

export interface GetSectionArgs {
  alias: string
}

export interface GetSectionData {
  data: {
    alias: string
    name: string
  } | undefined
}

export type GetSectionResult = [string, (url: string) => Promise<GetSectionData>]

export function getSection ({
  alias
}: GetSectionArgs): GetSectionResult {
  const params = queryString.stringify({
    'filter[alias][_eq]': alias,
    fields: 'alias,name'
  })
  const key = `${publicRuntimeConfig.API_URL}/items/sections?${params}`
  const fetcher = url => fetch(url).then(r => r.json()).then(r => ({ data: r?.data?.[0] }))
  return [key, fetcher]
}
