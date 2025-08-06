import React from 'react'
import { Message } from './ChatMessageList'

interface ChatMessageBubbleProps {
  message: Message
}

export const ChatMessageBubble: React.FC<ChatMessageBubbleProps> = ({
  message,
}) => {
  const isUser = message.sender === 'user'

  return (
    <li
      aria-label={isUser ? 'Your message' : 'Bot message'}
      style={{
        alignSelf: isUser ? 'flex-end' : 'flex-start',
        backgroundColor: isUser ? '#6f33b7' : '#f1f0f0',
        color: isUser ? 'white' : 'black',
        padding: '8px 12px',
        borderRadius: '16px',
        maxWidth: '75%',
        wordBreak: 'break-word',
      }}
    >
      {message.content}
    </li>
  )
}
