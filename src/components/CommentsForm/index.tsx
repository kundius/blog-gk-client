import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { VscClose } from 'react-icons/vsc'
import md5 from 'blueimp-md5'
import { BsFillChatQuoteFill } from 'react-icons/bs'
import { TiArrowBackOutline } from 'react-icons/ti'

import { Spinner } from '@components/Spinner'

import * as styles from './styles'

export interface CommentsFormReply {
  id: string
  content: string
  authorName: string
}

export interface CommentsFormProps {
  placeholder?: string
  formId?: string
  formRef?: React.MutableRefObject<HTMLDivElement | null>
  fieldRef?: React.MutableRefObject<HTMLTextAreaElement | null>
  reply?: CommentsFormReply
  avatar?: string
  isLoading?: boolean
  content?: string
  onChangeContent?: (value: string) => void
  authorName?: string
  onChangeAuthorName?: (value: string) => void
  authorEmail?: string
  onChangeAuthorEmail?: (value: string) => void
  onRemoveReply?: () => void
  scrollToComment?: (value: string) => void
  onCancel?: () => void
  onSubmit?: () => void
}

export function CommentsForm ({
  formId,
  placeholder,
  formRef,
  fieldRef,
  isLoading = false,
  onCancel,
  onSubmit,
  content,
  onChangeContent,
  authorEmail,
  authorName,
  onChangeAuthorEmail,
  onChangeAuthorName,
  reply,
  avatar,
  onRemoveReply,
  scrollToComment
}: CommentsFormProps) {
  return (
    <styles.Wrapper ref={formRef}>
      <styles.Avatar className="mt-10">
        <img src={getAvatar()} alt="" />
      </styles.Avatar>
      <styles.Form>
        <div className="grid grid-cols-2 gap-8 mb-2">
          <div className="flex gap-2 items-center flex-grow">
            <div className="text-sm whitespace-nowrap">
              Ваше имя:
            </div>
            <styles.Input
              value={authorName}
              onChange={e => onChangeAuthorName?.(e.target.value)}
            />
          </div>
          <div className="flex gap-2 items-center flex-grow">
            <div className="text-sm whitespace-nowrap">
            Ваш e-mail:
            </div>
            <styles.Input
              value={authorEmail}
              onChange={e => onChangeAuthorEmail?.(e.target.value)}
            />
          </div>
        </div>
        <styles.Field htmlFor={formId}>
          {renderReply()}
          <span className="flex">
            <styles.Textarea
              id={formId}
              ref={fieldRef}
              minRows={1}
              readOnly={isLoading}
              placeholder={placeholder}
              value={content}
              onChange={e => onChangeContent?.(e.target.value)}
            />
            {onCancel && (
              <styles.Action
                type="button"
                onClick={onCancel}
              >
                <TiArrowBackOutline />
              </styles.Action>
            )}
            {onSubmit && (
              <styles.Action
                disabled={isLoading}
                type="button"
                onClick={onSubmit}
              >
                {isLoading ? <Spinner size={20} /> : <AiOutlineSend />}
              </styles.Action>
            )}
          </span>
        </styles.Field>
      </styles.Form>
    </styles.Wrapper>
  )

  function renderReply () {
    if (!reply) return

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault()
      scrollToComment?.(reply.id)
    }

    const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      e.stopPropagation()
      onRemoveReply?.()
    }

    return (
      <styles.Quote href={`#comment-${reply.id}`} onClick={handleClick}>
        <styles.QuoteIcon>
          <BsFillChatQuoteFill />
        </styles.QuoteIcon>
        <styles.QuoteText>
          <em>{reply.authorName} пишет:</em><br />
          {reply.content}
        </styles.QuoteText>
        {onRemoveReply && (
          <styles.QuoteRemove type="button" onClick={handleRemove}>
            <VscClose />
          </styles.QuoteRemove>
        )}
      </styles.Quote>
    )
  }

  function getAvatar() {
    return avatar || `https://www.gravatar.com/avatar/${md5(authorEmail)}?d=robohash`
  }
}
