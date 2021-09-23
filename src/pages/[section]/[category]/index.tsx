import { CategoryPage } from '@components/CategoryPage'
import fetch from 'isomorphic-unfetch'
import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'

import * as api from '@components/CategoryPage/api'

const { publicRuntimeConfig } = getRuntimeConfig()

export async function getStaticPaths() {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/items/categories?fields=alias,section.alias`)
  const categories = await res.json()
  const paths = categories.data.map((category) => ({
    params: { category: category.alias, section: category.section.alias }
  }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const [categoryKey, categoryFetcher] = api.getCategory({
    alias: params.category
  })

  const [articlesKey, articlesFetcher] = api.getArticles({
    alias: params.category,
    limit: 5,
    page: 1
  })

  const preloadData = {
    [categoryKey]: await categoryFetcher(categoryKey),
    [articlesKey]: await articlesFetcher(articlesKey)
  }

  return {
    props: {
      preloadData,
      alias: params.category
    },
    revalidate: 10
  }
}

export default CategoryPage
