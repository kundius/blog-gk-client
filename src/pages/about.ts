import { AboutPage } from '@components/AboutPage'
import * as api from '@components/AboutPage/api'

export async function getStaticProps({ params }) {
  const apiAbout = api.getAbout()

  const preloadData = {
    [apiAbout[0]]: await apiAbout[1](apiAbout[0])
  }

  return {
    props: {
      preloadData
    }
  }
}

export default AboutPage
