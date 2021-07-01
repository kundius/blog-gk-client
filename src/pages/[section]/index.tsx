import { SectionPage } from '@components/SectionPage'
import fetch from 'isomorphic-unfetch'
import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'

import * as api from '@components/SectionPage/api'

const { publicRuntimeConfig } = getRuntimeConfig()

export async function getStaticPaths() {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/items/sections?fields=alias`)
  const sections = await res.json()
  const paths = sections.data.map((section) => ({
    params: { section: section.alias }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const apiSection = api.getSection({
    alias: params.section
  })

  const apiArticles = api.getArticles({
    alias: params.section,
    limit: 10,
    page: 1
  })

  const preloadData = {
    [apiArticles[0]]: await apiArticles[1](apiArticles[0]),
    [apiSection[0]]: await apiSection[1](apiSection[0])
  }

  return {
    props: {
      preloadData,
      alias: params.section
    }
  }
}

export default SectionPage
