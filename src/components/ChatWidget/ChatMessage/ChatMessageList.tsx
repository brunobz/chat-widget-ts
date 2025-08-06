import React from 'react'
import { ChatMessageBubble } from './ChatMessageBubble'

export interface Message {
  id: string
  sender: 'user' | 'bot'
  content: string
}

interface ChatMessageListProps {
  messages: Message[]
}

export const ChatMessageList = ({
  messages,
  ...props
}: React.ComponentPropsWithRef<'ul'> & ChatMessageListProps) => {
  return (
    <ul
      aria-live="polite"
      aria-relevant="additions"
      style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
      {...props}
    >
      {messages.map((msg) => (
        <ChatMessageBubble key={msg.id} message={msg} />
      ))}
    </ul>
  )
}
