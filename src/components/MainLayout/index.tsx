import React from 'react'

import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { Container } from '@components/Container'
import { SideAuthor } from '@components/SideAuthor'

import * as styles from './styles'

export interface MainLayout {
  children?: React.ReactNode
}

export function MainLayout ({
  children
}: MainLayout) {
  return (
    <>
      <Header />
      <Container className="mt-20 mb-20">
        <styles.Main>
          <styles.Content>
            {children}
          </styles.Content>
          <styles.Side>
            <SideAuthor />
          </styles.Side>
        </styles.Main>
      </Container>
      <Footer />
    </>
  )
}
