import React, { useContext } from 'react'
import useSWR from 'swr'
import { Helmet } from 'react-helmet'

import { Content } from '@components/Content'
import { MainLayout } from '@components/MainLayout'
import { PreloadContext } from '@components/PreloadContext'

import * as api from './api'

export function AboutPage () {
  const preload = useContext(PreloadContext)

  const [key, fetcher] = api.getAbout()

  const { data: result } = useSWR<api.GetAboutData>(key, fetcher, {
    initialData: preload[key]
  })

  return (
    <MainLayout>
      <Helmet>
        <title>{result?.data.seo_title || 'Обо мне'}</title>
        <meta name="description" content={result?.data.seo_keywords} />
        <meta name="keywords" content={result?.data.seo_description} />
      </Helmet>

      <Content dangerouslySetInnerHTML={{ __html: result?.data.content }} />
    </MainLayout>
  )
}
