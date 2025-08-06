import React, { FormEvent } from 'react'
import { ChatInput } from './ChatInput/ChatInput'
import { ChatSubmitButton } from './ChatSubmitButton/ChatSubmitButton'

interface ChatInputProps {
  disabled: boolean
  onSubmit: (e: React.FormEvent) => void
}

export const ChatForm = ({
  disabled,
  onSubmit,
}: React.ComponentPropsWithRef<'form'> & ChatInputProps) => {
  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: 'flex',
        padding: '10px',
        borderTop: '1px solid #ccc',
      }}
    >
      <ChatInput disabled={disabled} />

      <ChatSubmitButton disabled={disabled} />
    </form>
  )
}
