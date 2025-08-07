import React from 'react'
import { styles } from './ChatCloseButton.styles'

interface ChatCloseButtonProps {
  onClose: () => void
}

export const ChatCloseButton = ({
  onClose,
  ...props
}: React.ComponentPropsWithRef<'button'> & ChatCloseButtonProps) => {
  return (
    <button
      aria-label="Close chat"
      onClick={onClose}
      style={styles.button}
      {...props}
    >
      ×
    </button>
  )
}
