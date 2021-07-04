import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'
import queryString from 'query-string'

const { publicRuntimeConfig } = getRuntimeConfig()

export interface GetAlbumsData {
  data: {
    name: string
    alias: string
    thumbnail?: {
      filename_disk: string
      title: string
      blurhash: string
    }
  }[]
}

export type GetAlbumsResult = [string, (url: string) => Promise<GetAlbumsData>]

export function getAlbums (): GetAlbumsResult {
  const params = queryString.stringify({
    fields: 'alias,name,thumbnail.filename_disk,thumbnail.title,thumbnail.blurhash'
  })
  const key = `${publicRuntimeConfig.API_URL}/items/albums?${params}`
  const fetcher = url => fetch(url).then(r => r.json())
  return [key, fetcher]
}
