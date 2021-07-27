import React from 'react'
import Link from 'next/link'

import { Image } from '@components/Image'
import { BsImage } from 'react-icons/bs'
import { ToqueIcon } from '@components/Icon/toque'

import * as styles from './styles'

export interface ArticleCardRelatedProps {
  name: string
  url: string
  createdAt: string
  excerpt?: string
  category: {
    name: string
    url: string
  }
  thumbnail?: {
    url: string
    name?: string
    blurHash?: string
  }
}

export function ArticleCardRelated ({
  name,
  url,
  category,
  createdAt,
  thumbnail,
  excerpt
}: ArticleCardRelatedProps) {
  return (
    <styles.Wrapper>
      <Link href={url} passHref>
        <styles.MainLink>
          {thumbnail && (
            <styles.Thumbnail>
              <Image
                src={thumbnail.url}
                alt={thumbnail.name}
                blurHash={thumbnail.blurHash}
                width={350}
                height={420}
                objectFit="cover"
                layout="responsive"
              />
            </styles.Thumbnail>
          )}
          {!thumbnail && (
            <styles.ThumbnailPlaceholder className="transition duration-300 ease-out bg-gray-200 dark:bg-gray-600">
              <BsImage />
            </styles.ThumbnailPlaceholder>
          )}
        </styles.MainLink>
      </Link>

      <styles.Inner>
        <styles.Info>
          <Link href={category.url} passHref>
            <styles.Category>{category.name}</styles.Category>
          </Link>
          <styles.Date>{createdAt}</styles.Date>
          <styles.Excerpt>{excerpt}</styles.Excerpt>
          <Link href={url} passHref>
            <styles.More>Читать дальше</styles.More>
          </Link>
        </styles.Info>
        <styles.Name>{name}</styles.Name>
      </styles.Inner>
    </styles.Wrapper>
  )
}
