const { parsed: localEnv } = require('dotenv').config()

const CLIENT_URL = localEnv.CLIENT_URL ? localEnv.CLIENT_URL : 'http://localhost:3000'
const API_URL = localEnv.API_URL ? localEnv.API_URL : 'http://localhost:4000'
const GRAPHQL_URL = localEnv.GRAPHQL_URL ? localEnv.GRAPHQL_URL : 'http://localhost:4000/graphql'
const IMAGE_DOMAINS = localEnv.IMAGE_DOMAINS ? localEnv.IMAGE_DOMAINS : 'localhost'

module.exports = {
  images: {
    domains: IMAGE_DOMAINS.split(','),
  },
  serverRuntimeConfig: {
    mySecret: 'secret'
  },
  publicRuntimeConfig: {
    CLIENT_URL,
    API_URL,
    GRAPHQL_URL
  },
  async redirects() {
    return [
      {
        source: '/assets/:slug',
        destination: `${API_URL}/assets/:slug`,
        permanent: true
      }
    ]
  }
}
