export type Sender = 'user' | 'bot'

export interface Message {
  id: string
  sender: Sender
  text: string
  timestamp: number
}
