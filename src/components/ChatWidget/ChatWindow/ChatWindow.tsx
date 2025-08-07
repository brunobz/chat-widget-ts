import React, { CSSProperties, useEffect, useRef } from 'react'
import { ChatStatus } from '../ChatStatus/ChatStatus'
import { ChatBanner } from '../ChatBanner/ChatBanner'
import { ChatMessageList } from '../ChatMessage/ChatMessageList'
import { ChatForm } from '../ChatForm/ChatForm'
import { ChatCloseButton } from '../ChatCloseButton/ChatCloseButton'
import { EloquentIcon } from '@/components/ui/icons/EloquentIcon'
import { styles } from './ChatWindow.styles'

interface Message {
  id: string
  sender: 'user' | 'bot'
  content: string
}

interface ChatWindowProps {
  customStyle: CSSProperties
  status: 'online' | 'offline' | 'maintenance'
  messages: Message[]
  onSendMessage: (msg: string) => void
  onClose: () => void
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  customStyle,
  status,
  messages,
  onSendMessage,
  onClose,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView?.({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <section
      role="dialog"
      aria-modal="true"
      aria-labelledby="chat-title"
      tabIndex={-1}
      style={styles.section}
    >
      <header style={styles.header}>
        <EloquentIcon color="#6f33b7" />
        <ChatCloseButton onClose={onClose} />
      </header>

      <ChatStatus status={status} />

      {status === 'maintenance' && (
        <ChatBanner message="Sorry! Service in maintenance mode." />
      )}

      <main style={styles.main}>
        <ChatMessageList messages={messages} style={customStyle} />
        <div ref={messagesEndRef} />
      </main>

      <ChatForm
        disabled={status === 'maintenance'}
        onSubmitForm={onSendMessage}
        style={customStyle}
      />
    </section>
  )
}
