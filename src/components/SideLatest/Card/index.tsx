import { DateTime } from 'luxon'
import React, { useState, useRef, useEffect } from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import { Image } from '@components/Image'
import Skeleton from 'react-loading-skeleton'

import * as api from '../api'
import * as styles from './styles'

export interface CardProps {
  name: string
  href: string
  createdAt: string
  category: {
    name: string
    href: string
  }
  thumbnail?: {
    name?: string
    blurHash?: string
    url: string
  }
}

export const Card = ({
  name,
  href,
  createdAt,
  category,
  thumbnail
}: CardProps) => {
  return (
    <styles.Wrapper>
      {thumbnail && (
        <Link href={href}>
          <styles.Thumbnail>
            <Image
              src={thumbnail.url}
              alt={thumbnail.name}
              blurHash={thumbnail.blurHash}
              width={90}
              height={90}
              objectFit="cover"
              layout="responsive"
            />
          </styles.Thumbnail>
        </Link>
      )}
      <styles.Info>
        <styles.Category>
          <Link href={category.href} passHref>
            <a>{category.name}</a>
          </Link>
        </styles.Category>
        <styles.Title>
          <Link href={href} passHref>
            <a>{name}</a>
          </Link>
        </styles.Title>
        <styles.Date className="text-gray-400">
          {createdAt}
        </styles.Date>
      </styles.Info>
    </styles.Wrapper>
  )
}
