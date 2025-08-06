import React from 'react'

export const ChatInput = ({
  ...props
}: React.ComponentPropsWithRef<'input'>) => {
  return (
    <input
      name="chatInput"
      type="text"
      aria-label="Type your message"
      autoFocus
      placeholder={
        props.disabled
          ? 'Chat unavailable during maintenance'
          : 'Type your message...'
      }
      style={{
        flex: 1,
        padding: '8px 12px',
        borderRadius: '20px',
        border: '0.5px solid #ccc',
        fontSize: '0.8rem',
        marginRight: '8px',
      }}
      {...props}
    />
  )
}
