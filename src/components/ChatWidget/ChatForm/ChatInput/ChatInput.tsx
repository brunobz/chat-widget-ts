import React from 'react'
import { styles } from './ChatInput.styles'

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
      style={styles.input}
      {...props}
    />
  )
}
