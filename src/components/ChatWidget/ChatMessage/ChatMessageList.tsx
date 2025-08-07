import React from 'react'
import { ChatMessageBubble } from './ChatMessageBubble'
import { styles } from './ChatMessage.styles'

export type sender = 'user' | 'bot'

export interface Message {
  id: string
  sender: sender
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
      {...props}
      aria-live="polite"
      aria-relevant="additions"
      style={styles.message}
    >
      {messages.length ? (
        messages.map((msg) => (
          <ChatMessageBubble key={msg.id} message={msg} style={props.style} />
        ))
      ) : (
        <div style={{ height: '3em', textAlign: 'center' }}>
          How can we help you?
        </div>
      )}
    </ul>
  )
}
