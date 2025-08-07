import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ChatWindow } from './ChatWindow'

describe('ChatWindow', () => {
  it('renders chat window', () => {
    render(
      <ChatWindow
        customStyle={{}}
        status="offline"
        messages={[]}
        onClose={vi.fn()}
        onSendMessage={vi.fn()}
      />
    )

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('shows service unavailable message, when isMaintenance is true', () => {
    render(
      <ChatWindow
        customStyle={{}}
        status="maintenance"
        messages={[]}
        onClose={vi.fn()}
        onSendMessage={vi.fn()}
      />
    )

    expect(
      screen.getByText('Sorry! Service in maintenance mode.')
    ).toBeInTheDocument()
  })
})
