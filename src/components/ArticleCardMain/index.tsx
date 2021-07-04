import React from 'react'
import Link from 'next/link'

import { Image } from '@components/Image'
import { ClocheIcon } from '@components/Icon/cloche'
import { ToqueIcon } from '@components/Icon/toque'
import { EyeIcon } from '@components/Icon/eye'
import { CommentsIcon } from '@components/Icon/comments'

import * as styles from './styles'

export interface ArticleCardMainProps {
  name: string
  url: string
  createdAt: string
  portionCount?: string
  cookingTime?: string
  commentsCount: number
  hitsCount?: number
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

export function ArticleCardMain ({
  name,
  url,
  category,
  createdAt,
  portionCount,
  cookingTime,
  commentsCount,
  hitsCount,
  thumbnail,
  excerpt
}: ArticleCardMainProps) {
  return (
    <styles.Wrapper>
      <styles.Meta>
        <Link href={category.url} passHref>
          <styles.Category>{category.name}</styles.Category>
        </Link>
        <styles.Date>{createdAt}</styles.Date>
      </styles.Meta>
      <styles.Name>
        <Link href={url} passHref>
          <a>{name}</a>
        </Link>
      </styles.Name>
      <styles.Info className="flex items-center gap-8 justify-between border-b border-gray-200 dark:border-gray-600">
        <div className="flex items-center gap-8">
          {cookingTime && (
            <div className="flex items-center gap-2">
              <div className="transition duration-300 ease-out text-lg text-gray-600 dark:text-gray-200">
                <ToqueIcon />
              </div>
              <div className="text-xs uppercase">
                {cookingTime}
              </div>
            </div>
          )}
          {portionCount && (
            <div className="flex items-center gap-2">
              <div className="transition duration-300 ease-out text-lg text-gray-600 dark:text-gray-200">
                <ClocheIcon />
              </div>
              <div className="text-xs uppercase">
                {portionCount}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-8">
          {typeof hitsCount !== 'undefined' && (
            <a className="flex items-center gap-8">
              <span className="flex items-center gap-2">
                <span className="transition duration-300 ease-out text-lg text-gray-600 dark:text-gray-200">
                  <EyeIcon />
                </span>
                <span className="text-xs uppercase">
                  {hitsCount}
                </span>
              </span>
            </a>
          )}
          <Link href={`${url}#comments`} passHref>
            <a className="flex items-center gap-8">
              <span className="flex items-center gap-2">
                <span className="transition duration-300 ease-out text-lg text-gray-600 dark:text-gray-200">
                  <CommentsIcon />
                </span>
                <span className="text-xs uppercase">
                  {commentsCount}
                </span>
              </span>
            </a>
          </Link>
        </div>
      </styles.Info>
      {thumbnail && (
        <Link href={url}>
          <styles.Thumbnail>
            <Image
              src={thumbnail.url}
              alt={thumbnail.name}
              blurHash={thumbnail.blurHash}
              width={640}
              height={480}
              objectFit="cover"
              layout="responsive"
            />
          </styles.Thumbnail>
        </Link>
      )}
      {excerpt && (
        <styles.Excerpt>
          {excerpt}
        </styles.Excerpt>
      )}
      <Link href={url} passHref>
        <styles.More>Читать дальше</styles.More>
      </Link>
    </styles.Wrapper>
  )
}
