import React, { useState, useContext, useEffect, useRef } from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import { Helmet } from 'react-helmet'
import { DateTime } from 'luxon'
import { AiOutlineTag } from 'react-icons/ai'
import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from 'react-icons/hi'
import {
  FacebookShareButton,
  FacebookIcon,
  OKShareButton,
  OKIcon,
  PinterestShareButton,
  PinterestIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  VKShareButton,
  VKIcon
} from 'react-share'

import { Content } from '@components/Content'
import { Image } from '@components/Image'
import { ClocheIcon } from '@components/Icon/cloche'
import { ToqueIcon } from '@components/Icon/toque'
import { CommentsIcon } from '@components/Icon/comments'
import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'
import { MainLayout } from '@components/MainLayout'
import { PreloadContext } from '@components/PreloadContext'
import { ArticleRelated } from '@components/ArticleRelated'
import { Comments } from '@components/Comments'
import { Ingredients } from '@components/Ingredients'

import * as api from './api'
import * as styles from './styles'

const { publicRuntimeConfig } = getRuntimeConfig()

interface ContentPageProps {
  alias: string
}

export function ContentPage ({
  alias
}: ContentPageProps) {
  const preload = useContext(PreloadContext)

  const [key, fetcher] = api.getPage({ alias })
  const { data: result } = useSWR<api.GetPageData>(key, fetcher, {
    initialData: preload[key]
  })

  return (
    <MainLayout>
      <Helmet>
        <title>{result?.data.seo_title || result?.data.name}</title>
        <meta name="description" content={result?.data.seo_keywords} />
        <meta name="keywords" content={result?.data.seo_description} />
      </Helmet>

      <h1 className="mb-12">{result?.data.name}</h1>

      <Content dangerouslySetInnerHTML={{ __html: result?.data.content }} />
    </MainLayout>
  )
}
