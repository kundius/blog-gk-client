import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaSearch } from 'react-icons/fa'
import { useSpring, animated, useSpringRef, useChain } from 'react-spring'

import * as styles from './styles'

export const Form = () => {
  const router = useRouter()
  const fieldRef = useRef<HTMLInputElement>(null)
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    router.push(`/search?q=${search}`)
  }

  useEffect(() => {
    setSearch(String(router.query.q))
  }, [router.query.q])

  return (
    <styles.Wrapper onSubmit={handleSubmit}>
      <styles.Label>
        Искать
      </styles.Label>
      <div className="relative w-full">
        <styles.Field
          ref={fieldRef}
          placeholder="Что будем искать?"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <styles.Button
          type="submit"
        >
          <FaSearch />
        </styles.Button>
        <styles.Help>
          Например, правильное питание
        </styles.Help>
      </div>
    </styles.Wrapper>
  )
}
