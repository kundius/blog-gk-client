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
    sort: '-date_created',
    'filter[category][alias][_eq]': alias,
    fields: 'alias,name,date_created,portion_count,cooking_time,excerpt,comments_count,hits_count,category.name,category.alias,category.section.alias,thumbnail.filename_disk,thumbnail.title,thumbnail.blurhash',
    limit,
    page,
    meta: 'filter_count'
  })
  const key = `${publicRuntimeConfig.API_URL}/items/articles?${params}`
  const fetcher = url => fetch(url).then(r => r.json())
  return [key, fetcher]
}

export interface GetCategoryArgs {
  alias: string
}

export interface GetCategoryData {
  data: {
    alias: string
    name: string
    seo_title: string
    seo_keywords: string
    seo_description: string
  } | undefined
}

export type GetCategoryResult = [string, (url: string) => Promise<GetCategoryData>]

export function getCategory ({
  alias
}: GetCategoryArgs): GetCategoryResult {
  const params = queryString.stringify({
    'filter[alias][_eq]': alias,
    fields: 'alias,name,seo_title,seo_keywords,seo_description'
  })
  const key = `${publicRuntimeConfig.API_URL}/items/categories?${params}`
  const fetcher = url => fetch(url).then(r => r.json()).then(r => ({ data: r?.data?.[0] }))
  return [key, fetcher]
}
