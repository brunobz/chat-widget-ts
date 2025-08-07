import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ChatMessageList, sender } from './ChatMessageList'

describe('ChatMessageList', () => {
  const mockMessages = [
    { id: '1', sender: 'user' as sender, content: 'Hello' },
    { id: '2', sender: 'bot' as sender, content: 'Hi there!' },
  ]

  it('renders list of messages', () => {
    render(<ChatMessageList messages={mockMessages} />)

    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('Hi there!')).toBeInTheDocument()
  })
})
