import { AlbumPage } from '@components/AlbumPage'
import fetch from 'isomorphic-unfetch'
import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'

import * as albumApi from '@components/AlbumPage/api'

const { publicRuntimeConfig } = getRuntimeConfig()

export async function getStaticPaths() {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/items/albums?fields=alias`)
  const albums = await res.json()
  const paths = albums.data.map((album) => ({
    params: {
      album: album.alias
    }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const preloadData = {}

  const [albumKey, albumFetcher] = albumApi.getAlbum({
    alias: params.album
  })
  const albumData = await albumFetcher(albumKey)
  preloadData[albumKey] = albumData

  return {
    props: {
      preloadData,
      alias: params.album
    }
  }
}

export default AlbumPage
