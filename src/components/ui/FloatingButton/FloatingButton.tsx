import React from 'react'
import { MessagesSquare, ChevronDown } from 'lucide-react'

interface FloatingButtonProps {
  isOpen: boolean
  toggle: () => void
}

export const FloatingButton = ({
  isOpen,
  toggle,
}: React.ComponentPropsWithRef<'button'> & FloatingButtonProps) => {
  return (
    <button
      onClick={toggle}
      aria-haspopup="dialog"
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Close chat' : 'Open chat'}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: '#6f33b7',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        fontSize: '24px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      {isOpen ? <ChevronDown /> : <MessagesSquare />}
    </button>
  )
}
