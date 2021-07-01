import React from 'react'
import Link from 'next/link'

import * as styles from './styles'

export interface BreadcrumbsProps {
  items: {
    href?: string
    title: string
  }[]
}

export function Breadcrumbs ({
  items
}: BreadcrumbsProps) {
  return (
    <styles.Wrapper className="text-gray-400 border-b border-gray-200 dark:border-gray-600">
      {items.map((item, i) => (
        <li>
          {
            item.href
              ? (
                  <Link href={item.href} passHref>
                    <a>{item.title}</a>
                  </Link>
                )
              : <span className="text-gray-600 dark:text-gray-200">{item.title}</span>
          }
        </li>
      ))}
    </styles.Wrapper>
  )
}
