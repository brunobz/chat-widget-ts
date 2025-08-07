import React from 'react'
import { Message } from './ChatMessageList'
import { styles } from './ChatMessage.styles'

interface ChatMessageBubbleProps {
  message: Message
}

export const ChatMessageBubble = ({
  message,
  ...props
}: React.ComponentPropsWithRef<'li'> & ChatMessageBubbleProps) => {
  const isUser = message.sender === 'user'

  return (
    <li
      aria-label={isUser ? 'Your message' : 'Bot message'}
      style={{
        ...styles.bubble,
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        backgroundColor: isUser
          ? props.style?.backgroundColor || '#6f33b7'
          : '#f1f0f0',
        color: isUser ? props.style?.color || 'white' : 'black',
      }}
    >
      {message.content}
    </li>
  )
}
