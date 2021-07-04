import { AlbumsPage } from '@components/AlbumsPage'
import * as api from '@components/AlbumsPage/api'

// export async function getStaticProps({ params }) {
//   const apiAbout = api.getAbout()

//   const preloadData = {
//     [apiAbout[0]]: await apiAbout[1](apiAbout[0])
//   }

//   return {
//     props: {
//       preloadData
//     }
//   }
// }

export default AlbumsPage
