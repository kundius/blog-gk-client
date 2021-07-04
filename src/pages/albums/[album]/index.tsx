import { AlbumPage } from '@components/AlbumPage'
import * as api from '@components/AlbumPage/api'

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

export default AlbumPage
