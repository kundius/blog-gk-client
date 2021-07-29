import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FaSearch } from 'react-icons/fa'
import { useSpring, animated, useSpringRef, useChain } from 'react-spring'

import styles from './styles.module.css'

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
    <form className={styles.Wrapper} onSubmit={handleSubmit}>
      <label className={styles.Label}>
        Искать
      </label>
      <div className="relative w-full">
        <input
          className={styles.Field}
          ref={fieldRef}
          placeholder="Что будем искать?"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button
          className={styles.Button}
          type="submit"
        >
          <FaSearch />
        </button>
        <div className={styles.Help}>
          Например, правильное питание
        </div>
      </div>
    </form>
  )
}
