import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ChatStatus } from './ChatStatus'

describe('ChatStatus', () => {
  it('shows "Online" when online', () => {
    render(<ChatStatus status="online" />)

    expect(screen.getByText(/online/i)).toBeInTheDocument()
  })

  it('shows "Offline" message when offline', () => {
    render(<ChatStatus status="offline" />)

    expect(screen.getByText(/offline/i)).toBeInTheDocument()
  })

  it('shows "Offline" message when in maintenance', () => {
    render(<ChatStatus status="maintenance" />)

    expect(screen.getByText(/offline/i)).toBeInTheDocument()
  })
})
