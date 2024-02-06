import { sva } from '@styled-system/css'

export const checkBoxStyle = sva({
  slots: ['root', 'container', 'checkBox'],
  base: {
    root: {},
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '{spacing.8}'
    },
    checkBox: {
      width: '24px',
      height: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 'md',
      border: '1px solid {colors.primary.200}',
      '&[data-state="checked"]': {
        backgroundColor: '{colors.primary.400}',
        borderColor: '{colors.primary.400}'
      }
    }
  }
})
