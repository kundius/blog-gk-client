import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'

const { publicRuntimeConfig } = getRuntimeConfig()

export interface GetAboutData {
  data: {
    id: string
    content: string
    seo_title: string
    seo_keywords: string
    seo_description: string
  }
}

export type GetAboutResult = [string, (url: string) => Promise<GetAboutData>]

export function getAbout (): GetAboutResult {
  const key = `${publicRuntimeConfig.API_URL}/items/about`
  const fetcher = url => fetch(url).then(r => r.json())
  return [key, fetcher]
}
