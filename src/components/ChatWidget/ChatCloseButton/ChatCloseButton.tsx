import React from 'react'

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
      style={{
        background: 'transparent',
        border: 'none',
        fontSize: '1.2rem',
        cursor: 'pointer',
      }}
      {...props}
    >
      ×
    </button>
  )
}
