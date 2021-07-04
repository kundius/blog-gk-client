import { ContentPage } from '@components/ContentPage'
import fetch from 'isomorphic-unfetch'
import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'

import * as pageApi from '@components/ContentPage/api'

const { publicRuntimeConfig } = getRuntimeConfig()

export async function getStaticPaths() {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/items/pages?fields=alias`)
  const pages = await res.json()
  const paths = pages.data.map((page) => ({
    params: {
      page: page.alias
    }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const preloadData = {}

  const [pageKey, pageFetcher] = pageApi.getPage({
    alias: params.page
  })
  const pageData = await pageFetcher(pageKey)
  preloadData[pageKey] = pageData

  return {
    props: {
      preloadData,
      alias: params.page
    }
  }
}

export default ContentPage
