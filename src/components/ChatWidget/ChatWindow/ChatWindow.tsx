import React, { useEffect, useRef } from 'react'
import { ChatStatus } from '../ChatStatus/ChatStatus'
import { ChatBanner } from '../ChatBanner/ChatBanner'
import { ChatMessageList } from '../ChatMessage/ChatMessageList'
import { ChatForm } from '../ChatForm/ChatForm'
import { ChatCloseButton } from '../ChatCloseButton/ChatCloseButton'
import { EloquentIcon } from '@/components/ui/FloatingButton/icons/EloquentIcon'

interface Message {
  id: string
  sender: 'user' | 'bot'
  content: string
}

interface ChatWindowProps {
  isOnline: boolean
  isMaintenance: boolean
  messages: Message[]
  onSendMessage: (msg: string) => void
  onClose: () => void
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  isOnline,
  isMaintenance,
  messages,
  onSendMessage,
  onClose,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
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

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const input = form.elements.namedItem('chatInput') as HTMLInputElement
    const value = input.value.trim()
    if (!value || isMaintenance) return
    onSendMessage(value)
    input.value = ''
  }

  return (
    <section
      role="dialog"
      aria-modal="true"
      aria-labelledby="chat-title"
      tabIndex={-1}
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        width: '320px',
        maxHeight: '480px',
        backgroundColor: 'white',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <header
        style={{
          padding: '10px',
          borderBottom: '1px solid #ccc',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <EloquentIcon color="#6f33b7" />
        <ChatCloseButton onClose={onClose} />
      </header>

      <ChatStatus isOnline={isOnline} isMaintenance={isMaintenance} />

      {isMaintenance && (
        <ChatBanner message="Sorry! Service in maintenance mode." />
      )}

      <main
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '10px',
        }}
      >
        <ChatMessageList messages={messages} />
        <div ref={messagesEndRef} />
      </main>

      <ChatForm disabled={isMaintenance} onSubmit={handleSubmit} />
    </section>
  )
}
