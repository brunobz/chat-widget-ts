import React from 'react'
import { MessagesSquare, ChevronDown } from 'lucide-react'
import { styles } from './FloatingButton.styles'

interface FloatingButtonProps {
  icon: React.ReactNode
  isOpen: boolean
  toggle: () => void
}

export const FloatingButton = ({
  icon = <MessagesSquare />,
  isOpen,
  toggle,
  ...props
}: React.ComponentPropsWithRef<'button'> & FloatingButtonProps) => {
  return (
    <button
      onClick={toggle}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
      style={{
        ...styles.button,
        color: props.style?.color || '#fff',
        backgroundColor: props.style?.backgroundColor || '#6f33b7',
      }}
    >
      {isOpen ? <ChevronDown /> : icon}
    </button>
  )
}
