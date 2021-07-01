import { HomePage } from '@components/HomePage'
// import fetch from 'isomorphic-unfetch'
// import getConfig from 'next/config'
// import { createApolloClient } from '@app/lib/apolloClient'
// import * as HeaderMenuSchema from '@components/HeaderMenu/schema.generated'

// const { publicRuntimeConfig } = getConfig()

// export async function getStaticProps() {
  // const apolloClient = createApolloClient()
  
  // await apolloClient.query<HeaderMenuSchema.HeaderMenuCategoriesQuery, HeaderMenuSchema.HeaderMenuCategoriesQueryVariables>({
  //   query: HeaderMenuSchema.HeaderMenuCategoriesDocument
  // })
  // return {
  //   props: {
  //     initialApolloState: apolloClient.cache.extract()
  //   }
  // }
//   const response = await fetch(`${publicRuntimeConfig.API_URL}/items/categories?fields=name,alias,section.alias`)
//   const json = await response.json()
//   return { props: { categories: json } }
// }

export default HomePage
