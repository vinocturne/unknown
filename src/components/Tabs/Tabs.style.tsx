import { sva } from '@styled-system/css'

export const tabsStyle = sva({
  slots: ['root', 'list', 'trigger', 'underline'],
  base: {
    root: {
      width: '100%'
    },
    list: {
      display: 'flex',
      gap: '{spacing.14}',
      textStyle: '22',
      fontWeight: '{fontWeights.700}'
    },
    trigger: {
      position: 'relative',
      color: 'gray.700',
      overflow: 'none',
      '&[data-selected=true]': {
        color: 'primary.400'
      }
    },
    underline: {
      pos: 'absolute',
      bottom: '-4px',
      zIndex: 999,
      left: 0,
      right: 0,
      height: '3px',
      display: 'block',
      backgroundColor: 'primary.400'
    }
  }
})
