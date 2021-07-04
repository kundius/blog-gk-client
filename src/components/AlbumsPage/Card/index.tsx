import React from 'react'
import Link from 'next/link'

import { Image } from '@components/Image'
import { BsImage } from 'react-icons/bs'

import * as styles from './styles'

export interface CardProps {
  name: string
  href: string
  thumbnail?: {
    url: string
    name?: string
    blurHash?: string
  }
}

export function Card ({
  name,
  href,
  thumbnail
}: CardProps) {
  return (
    <styles.Wrapper>
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
      <styles.Inner>
        <Link href={href} passHref>
          <styles.Name>{name}</styles.Name>
        </Link>
      </styles.Inner>
    </styles.Wrapper>
  )
}
