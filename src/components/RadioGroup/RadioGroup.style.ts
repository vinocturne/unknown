import { sva } from '@styled-system/css'

const RadioGroupStyle = sva({
  slots: [
    'container',
    'label',
    'listContainer',
    'itemContainer',
    'itemControl',
    'itemText'
  ],
  base: {
    container: {
      width: '100%',
      display: 'flex',
      flexDir: 'column'
    },
    label: {},
    listContainer: {
      display: 'flex',
      gap: 'token(spacing.8)'
    },
    itemContainer: {
      display: 'flex',
      gap: 'token(spacing.10)',
      alignItems: 'center'
    },
    itemControl: {
      width: '20px',
      height: '20px',
      borderRadius: 'full',
      transition: 'all 75ms',
      '&[data-state="checked"]': {
        border: '6px solid token(colors.primary.400)',
        '&[data-disabled]': {
          border: '6px solid token(colors.gray.100)',
          backgroundColor: 'white'
        }
      },
      '&[data-state="unchecked"]': {
        border: '1px solid token(colors.gray.150)',
        '&[data-disabled]': {
          backgroundColor: 'gray.50'
        }
      }
    },
    itemText: {
      textStyle: '16',
      color: 'gray.950'
    }
  },
  variants: {
    direction: {
      column: {
        listContainer: {
          flexDir: 'column',
          justifyContent: 'center'
        }
      },
      row: {
        listContainer: {
          flexDir: 'row',
          alignItems: 'center'
        }
      }
    }
  }
})

export default RadioGroupStyle
