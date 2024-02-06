import { sva } from '@styled-system/css'

export const textFieldStyle = sva({
  slots: ['root', 'input'],
  base: {
    root: {
      width: '100%',
      display: 'flex',
      minWidth: '140px',
      border: '1px solid {colors.primary.200}',
      borderRadius: 'md',
      padding: '{spacing.14} {spacing.12}',
      '&:focus-within': {
        borderColor: 'primary.400'
      }
    },
    input: {
      width: '100%',
      height: '100%',
      outline: 'none',
      flex: '1 0 0',
      textStyle: '14'
    }
  }
})
