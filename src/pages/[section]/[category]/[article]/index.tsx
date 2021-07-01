import { ArticlePage } from '@components/ArticlePage'
import fetch from 'isomorphic-unfetch'
import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'

import * as articleApi from '@components/ArticlePage/api'
import * as relatedApi from '@components/ArticleRelated/api'

const { publicRuntimeConfig } = getRuntimeConfig()

export async function getStaticPaths() {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/items/articles?fields=alias,category.alias,category.section.alias`)
  const articles = await res.json()
  const paths = articles.data.map((article) => ({
    params: {
      article: article.alias,
      category: article.category.alias,
      section: article.category.section.alias
    }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const preloadData = {}

  const [articleKey, articleFetcher] = articleApi.getArticle({
    alias: params.article
  })
  const articleData = await articleFetcher(articleKey)
  preloadData[articleKey] = articleData

  if (articleData.data) {
    const [relatedKey, relatedFetcher] = relatedApi.getRelated({
      id: articleData.data.id,
      limit: 2
    })
    const relatedData = await relatedFetcher(relatedKey)
    preloadData[relatedKey] = relatedData
  }

  return {
    props: {
      preloadData,
      alias: params.article
    }
  }
}

export default ArticlePage
