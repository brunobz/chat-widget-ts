import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ChatStatus } from './ChatStatus'

describe('ChatStatus', () => {
  it('shows "Online" when online', () => {
    render(<ChatStatus isOnline={true} isMaintenance={false} />)

    expect(screen.getByText(/online/i)).toBeInTheDocument()
  })

  it('shows "Offline" message when offline', () => {
    render(<ChatStatus isOnline={false} isMaintenance={false} />)

    expect(screen.getByText(/offline/i)).toBeInTheDocument()
  })

  it('shows "Offline" message when in maintenance', () => {
    render(<ChatStatus isOnline={false} isMaintenance={true} />)

    expect(screen.getByText(/offline/i)).toBeInTheDocument()
  })
})
