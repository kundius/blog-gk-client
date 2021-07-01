import React from 'react'
import { default as NextImage, ImageProps as NextImageProps } from 'next/image'
import { decode, isBlurhashValid } from 'blurhash'

import styled from 'styled-components'

export type ImageProps = Omit<NextImageProps, 'placeholder' | 'blurDataURL'> & {
  blurHash?: string | null
}

function getDataUrlFromBlurHash(blurHash: string): string | undefined {
  if (typeof window === 'undefined') return
  if (!(blurHash && isBlurhashValid(blurHash))) return

  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  canvas.width = 32
  canvas.height = 32

  if (!ctx) return

  const imageData = ctx.createImageData(32, 32)
  imageData.data.set(decode(blurHash, 32, 32))
  ctx.putImageData(imageData, 0, 0)
  return canvas.toDataURL()
}

export const Image = ({ blurHash, ...props }: ImageProps) => {
  if (blurHash) {
    const dataUrl = getDataUrlFromBlurHash(blurHash)
    if (dataUrl) {
      return (
        <Element
          placeholder="blur"
          blurDataURL={dataUrl}
          {...props}
        />
      )
    }
  }
  return (
    <Element
      placeholder="empty"
      {...props}
    />
  )
}

const Element = styled(NextImage)`
  filter: none !important;
`
