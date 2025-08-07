import { render, screen } from '@testing-library/react'
import { ChatInput } from '@/components/ChatWidget/ChatForm/ChatInput/ChatInput'
import { describe, it, expect, vi } from 'vitest'

describe('ChatInput', () => {
  it('renders the input field', () => {
    render(<ChatInput value="" />)

    expect(
      screen.getByPlaceholderText(/type your message/i)
    ).toBeInTheDocument()
  })

  it('shows unavailability message, when is disabled', () => {
    render(<ChatInput value="test" disabled={true} />)
    expect(screen.getByRole('textbox')).toBeDisabled()
    expect(
      screen.getByPlaceholderText(/Chat unavailable during maintenance/i)
    ).toBeInTheDocument()
  })
})
