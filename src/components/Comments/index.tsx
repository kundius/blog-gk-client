import React, { useContext, useEffect, useRef, useState } from 'react'
import useSWR, { mutate } from 'swr'
import { DateTime } from 'luxon'

import { getRuntimeConfig } from '@app/utils/getRuntimeConfig'
import { Container } from '@components/Container'
import { CommentsForm, CommentsFormReply } from '@components/CommentsForm'
import { CommentsItem, CommentsItemData } from '@components/CommentsItem'
import { CommentsItemSkeleton } from '@components/CommentsItem/skeleton'
import { PreloadContext } from '@components/PreloadContext'

import * as styles from './styles'
import * as api from './api'

const { publicRuntimeConfig } = getRuntimeConfig()

export interface CommentsProps {
  threadId: string
  threadType: string
}

export function Comments ({
  threadId,
  threadType
}: CommentsProps) {
  const preload = useContext(PreloadContext)

  const [commentsKey, commentsFetcher] = api.getComments({
    threadId,
    threadType
  })

  const { data: commentsResult } = useSWR<api.GetCommentsData>(commentsKey, commentsFetcher, {
    initialData: preload[commentsKey]
  })

  // state
  const [highlightIds, setHighlightIds] = useState<string[]>([])
  const [createReply, setCreateReply] = useState<CommentsFormReply | undefined>()
  const [createValue, setCreateValue] = useState<string | undefined>()
  const [authorName, setAuthorName] = useState<string | undefined>()
  const [authorEmail, setAuthorEmail] = useState<string | undefined>()
  const [creating, setCreating] = useState(false)

  // refs
  const createFormRef = useRef<HTMLDivElement | null>(null)
  const createFieldRef = useRef<HTMLTextAreaElement | null>(null)

  const items: CommentsItemData[] = commentsResult?.data.map(item => ({
    id: item.id,
    content: item.content || '',
    createdAt: item.date_created,
    isBlocked: item.status === 'draft',
    isChanged: !!item.date_updated,
    parent: (
      item.parent
        ? {
            content: item.parent.content || '',
            id: item.parent.id,
            authorName: item.parent.author_name || 'Гость'
          }
        : undefined
    ),
    authorName: item.author_name || 'Гость',
    raw: item.raw || '',
    updatedAt: item.date_updated
  })) || []

  return (
    <styles.Wrapper id="comments">
      <div className="mb-12 text-gray-400 text-5xl">
        Комментарии
      </div>

      <div className="p-16 transition duration-300 ease-out bg-gray-100 dark:bg-gray-800 rounded-3xl">
        <div className="max-w-2xl ml-auto mr-auto">
          <CommentsForm
            formId="createForm"
            placeholder="Добавьте ваш комментарий"
            avatar={undefined}
            isLoading={creating}
            content={createValue}
            onChangeContent={setCreateValue}
            onSubmit={onCreateSubmit}
            onChangeAuthorEmail={setAuthorEmail}
            authorEmail={authorEmail}
            onChangeAuthorName={setAuthorName}
            authorName={authorName}
            reply={createReply}
            onRemoveReply={onCreateRemoveReply}
            formRef={createFormRef}
            fieldRef={createFieldRef}
            scrollToComment={scrollToComment}
          />

          {!commentsResult && <CommentsItemSkeleton />}

          {items.map(item => (
            <CommentsItem
              key={item.id}
              data={item}
              onReply={onReply}
              isHighlight={highlightIds?.includes(item.id)}
              scrollToComment={scrollToComment}
            />
          ))}
        </div>
      </div>
    </styles.Wrapper>
  )

  // actions

  function highlightComments (ids: string[]) {
    setHighlightIds(prev => ([...prev, ...ids]))
    setTimeout(() => {
      setHighlightIds(prev => ([...prev.filter(prevId => !ids.includes(prevId))]))
    }, 2000)
  }

  function scrollToComment (id: string) {
    const el = document.getElementById(`comment-${id}`)
    if (el) {
      el.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
      highlightComments([id])
    }
  }

  async function fetchMore () {
    await mutate(commentsKey, async (prev: api.GetCommentsData) => {
      const response = await commentsFetcher(commentsKey)
      const newComments = response.data.filter(
        item => !prev.data.find(_item => _item.id === item.id)
      )
      highlightComments(newComments.map(item => item.id))
    })
  }

  // item handlers

  async function onReply (data: CommentsItemData) {
    setCreateReply(data)
    createFormRef.current && createFormRef.current.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    })
    createFieldRef.current && createFieldRef.current.focus({ preventScroll: true })
  }

  // create form handlers

  async function onCreateSubmit () {
    if (!createValue) return

    await fetch(`${publicRuntimeConfig.API_URL}/custom/comments/create`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: createValue,
        parent_id: createReply?.id,
        thread_type: threadType,
        thread_id: threadId,
        author_email: authorEmail,
        author_name: authorName
      })
    })

    setCreateValue('')
    setAuthorEmail('')
    setAuthorName('')
    setCreateReply(undefined)
    await fetchMore()
  }

  async function onCreateRemoveReply () {
    setCreateReply(undefined)
    createFieldRef.current && createFieldRef.current.focus()
  }
}
