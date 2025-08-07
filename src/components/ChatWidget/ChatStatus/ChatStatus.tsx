import React from 'react'
import { styles } from './ChatStatus.styles'

interface ChatStatusProps {
  isOnline: boolean
  isMaintenance: boolean
}

export const ChatStatus = ({
  isOnline,
  isMaintenance,
  ...props
}: React.ComponentPropsWithRef<'div'> & ChatStatusProps) => {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        ...styles.status,
        color: isOnline && !isMaintenance ? 'green' : 'red',
        backgroundColor: isOnline && !isMaintenance ? '#e6ffed' : '#ffe6e6',
      }}
      {...props}
    >
      {isOnline && !isMaintenance ? 'Online' : 'Offline'}
    </div>
  )
}
