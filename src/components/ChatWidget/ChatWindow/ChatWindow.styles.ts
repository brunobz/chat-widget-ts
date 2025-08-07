export const styles = {
  section: {
    position: 'fixed',
    bottom: '80px',
    right: '20px',
    width: '320px',
    maxHeight: '480px',
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 999,
  } as React.CSSProperties,

  header: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as React.CSSProperties,

  main: {
    flex: 1,
    overflowY: 'auto',
    padding: '10px',
  } as React.CSSProperties,
}
