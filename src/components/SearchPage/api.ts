import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'
import queryString from 'query-string'

const { publicRuntimeConfig } = getRuntimeConfig()

export interface SearchArgs {
  search: string
  limit: number
  page: number
}

export interface SearchData {
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

export type SearchResult = [string, (url: string) => Promise<SearchData>]

export function Search ({
  search,
  limit,
  page
}: SearchArgs): SearchResult {
  const params = queryString.stringify({
    search,
    fields: 'alias,name,date_created,portion_count,cooking_time,excerpt,comments_count,category.name,category.alias,category.section.alias,thumbnail.filename_disk,thumbnail.title,thumbnail.blurhash',
    limit,
    page,
    meta: 'filter_count'
  })
  const key = `${publicRuntimeConfig.API_URL}/items/articles?${params}`
  const fetcher = url => fetch(url).then(r => r.json())
  return [key, fetcher]
}
