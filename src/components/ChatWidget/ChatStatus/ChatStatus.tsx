import React from 'react'

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
        padding: '6px 10px',
        fontSize: '0.9rem',
        color: isOnline && !isMaintenance ? 'green' : 'red',
        backgroundColor: isOnline && !isMaintenance ? '#e6ffed' : '#ffe6e6',
        borderRadius: '4px',
        margin: '0 10px 10px 10px',
        userSelect: 'none',
      }}
      {...props}
    >
      {isOnline && !isMaintenance ? 'Online' : 'Offline'}
    </div>
  )
}
