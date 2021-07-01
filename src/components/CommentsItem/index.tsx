import React from 'react'
import { MdAccessTime } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillChatQuoteFill } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { DateTime } from 'luxon'

import * as styles from './styles'
import * as api from './api'
import useSWR from 'swr'

export interface CommentsItemData {
  id: string
  content: string
  raw: string
  isBlocked: boolean
  isChanged: boolean
  createdAt: string
  updatedAt: string
  authorName: string
  parent?: {
    id: string
    content: string
    authorName: string
  }
}

export interface CommentsItemProps {
  data: CommentsItemData
  onReply?: (data: CommentsItemData) => void
  scrollToComment?: (id: string) => void
  isHighlight?: boolean
}

export function CommentsItem ({
  data,
  onReply,
  scrollToComment,
  isHighlight = false
}: CommentsItemProps) {
  const { parent, authorName, id, createdAt, updatedAt, content, isChanged } = data

  const [avatarKey, avatarFetcher] = api.getAvatar({ id })

  const { data: avatarResult } = useSWR<api.GetAvatarData>(avatarKey, avatarFetcher)

  return (
    <styles.Wrapper id={`comment-${id}`} isHighlight={isHighlight}>
      <styles.Avatar>
        <img src={avatarResult?.data} alt="" />
      </styles.Avatar>
      <styles.Body>
        <styles.Headline>
          <styles.Name>{authorName}</styles.Name>
          <styles.Date>
            <MdAccessTime /> {DateTime.fromISO(createdAt).setLocale('ru').toRelative()}
          </styles.Date>
          {isChanged && (
            <span
              className="italic text-gray-400 text-base ml-4"
              title={`изменен ${DateTime.fromISO(updatedAt).setLocale('ru').toRelative()}`}
            >
              <AiOutlineEdit />
            </span>
          )}
        </styles.Headline>
        {renderParent()}
        <styles.Text>
          {content}
        </styles.Text>
        <div className="flex space-x-4">
          {onReply && (
            <styles.Action
              onClick={() => onReply(data)}
              type="button"
            >
              Ответить
            </styles.Action>
          )}
        </div>
      </styles.Body>
    </styles.Wrapper>
  )
  
  function renderParent () {
    if (!parent) return

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault()
      scrollToComment?.(parent.id)
    }

    return (
      <styles.Quote href={`#comment-${parent.id}`} onClick={handleClick}>
        <styles.QuoteIcon>
          <BsFillChatQuoteFill />
        </styles.QuoteIcon>
        <styles.QuoteText>
          <em>{parent.authorName} пишет:</em><br />
          {parent.content}
        </styles.QuoteText>
      </styles.Quote>
    )
  }
}
