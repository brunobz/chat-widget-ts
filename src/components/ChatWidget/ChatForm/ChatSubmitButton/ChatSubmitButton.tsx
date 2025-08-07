import { Send } from 'lucide-react'
import { styles } from './ChatSubmitButton.styles'

export const ChatSubmitButton = ({
  ...props
}: React.ComponentPropsWithRef<'button'>) => {
  return (
    <button
      type="submit"
      aria-label="send-message"
      disabled={props.disabled}
      aria-disabled={props.disabled}
      style={{
        ...styles.button,
        backgroundColor: props.disabled
          ? '#ccc'
          : props.style?.backgroundColor || '#6f33b7',
        color: props.style?.color || 'white',
        cursor: props.disabled ? 'not-allowed' : 'pointer',
      }}
    >
      <Send />
    </button>
  )
}
