import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ChatWindow } from './ChatWindow'

describe('ChatWindow', () => {
  it('renders chat window', () => {
    render(
      <ChatWindow
        customStyle={{}}
        isMaintenance={false}
        isOnline={false}
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
        isMaintenance={true}
        isOnline={false}
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
