import { CSSProperties } from 'react'

export const styles = {
  bubble: {
    padding: '8px 12px',
    borderRadius: '16px',
    maxWidth: '75%',
    wordBreak: 'break-word',
  } as CSSProperties,

  message: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  } as CSSProperties,
}
