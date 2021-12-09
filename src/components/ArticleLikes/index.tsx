import React from 'react'
import classNames from 'classnames'
import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'

import { HeartIcon } from '@components/Icon/heart'

const { publicRuntimeConfig } = getRuntimeConfig()

export interface ArticleLikesProps {
  id: string
  initialCount: number
}

export function ArticleLikes({ id, initialCount }: ArticleLikesProps) {
  const [count, setCount] = React.useState(initialCount)
  const [active, setActive] = React.useState(false)

  const run = (action) => {
    fetch(`${publicRuntimeConfig.API_URL}/custom/articles/${id}/${action}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(action, json.data)
        if (typeof json.data === 'number') {
          setCount(json.data)
        }
      })
  }

  const getStoredIDs = () => {
    const storedLikes = localStorage.getItem('likes') || ''
    return storedLikes.split(',')
  }

  const handler = () => {
    const arrayOfIds = getStoredIDs()
    const currentIndex = arrayOfIds.indexOf(id)
    if (currentIndex !== -1) {
      arrayOfIds.splice(currentIndex, 1)
      setActive(false)
      run('likes/remove')
    } else {
      arrayOfIds.push(id)
      setActive(true)
      run('likes/add')
    }
    localStorage.setItem('likes', arrayOfIds.join(','))
  }

  React.useEffect(() => {
    setActive(getStoredIDs().includes(id))
  }, [id])

  React.useEffect(() => {
    setCount(initialCount)
  }, [initialCount])

  return (
    <button
      className="flex items-center gap-8 p-0 border-0 bg-transparent"
      onClick={handler}
    >
      <span className="flex items-center gap-2">
        <span className={classNames("transition duration-300 ease-out text-lg", {
          'text-gray-600 dark:text-gray-200': !active,
          'text-red-400': active
        })}>
          <HeartIcon filled={active} />
        </span>
        <span className="text-xs uppercase">{count}</span>
      </span>
    </button>
  )
}
