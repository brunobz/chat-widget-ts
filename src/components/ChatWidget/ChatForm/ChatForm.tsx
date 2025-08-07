import React, { FormEvent, useState } from 'react'
import { ChatInput } from './ChatInput/ChatInput'
import { ChatSubmitButton } from './ChatSubmitButton/ChatSubmitButton'

interface ChatInputProps {
  disabled: boolean
  onSubmitForm: (msg: string) => void
}

export const ChatForm = ({
  disabled,
  onSubmitForm,
  ...props
}: React.ComponentPropsWithRef<'form'> & ChatInputProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const trimmed = inputValue.trim()

    if (!trimmed || disabled) return

    onSubmitForm(trimmed)
    setInputValue('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        padding: '10px',
        borderTop: '1px solid #ccc',
      }}
    >
      <ChatInput
        disabled={disabled}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />

      <ChatSubmitButton disabled={disabled} style={props.style} />
    </form>
  )
}
