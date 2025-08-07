import React from 'react'
import { styles } from './ChatStatus.styles'
import { TChatStatus } from '@/hooks/useChatStatus/useChatStatus'

interface ChatStatusProps {
  status: TChatStatus
}

export const ChatStatus = ({
  status,
  ...props
}: React.ComponentPropsWithRef<'div'> & ChatStatusProps) => {
  const isOnline = status === 'online'

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        ...styles.status,
        color: isOnline ? 'green' : 'red',
        backgroundColor: isOnline ? '#e6ffed' : '#ffe6e6',
      }}
      {...props}
    >
      {isOnline ? 'Online' : 'Offline'}
    </div>
  )
}
