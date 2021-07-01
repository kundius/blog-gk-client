import React from 'react'
import Link from 'next/link'

import * as styles from './styles'

export interface FooterMenuProps {
  section: {
    href: string
    title: string
    icon: React.ReactNode
  }
  items: {
    href: string
    title: string
  }[]
}

export function FooterMenu ({
  section,
  items
}: FooterMenuProps) {
  return (
    <styles.Wrapper>
      <Link href={section.href} passHref>
        <styles.Section>
          <styles.SectionIcon className="text-gray-600 dark:text-gray-300">
            {section.icon}
          </styles.SectionIcon>
          <styles.SectionName>
            {section.title}
          </styles.SectionName>
        </styles.Section>
      </Link>
      <styles.List>
        {items.map((item, i) => (
          <li key={i}>
            <Link href={item.href} passHref>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </styles.List>
    </styles.Wrapper>
  )
}
