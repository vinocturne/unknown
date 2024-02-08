import { sva } from '@styled-system/css';

export const chipStyle = sva({
  slots: ['root'],
  base: {
    root: {
      display: 'inline-block',
      padding: '{spacing.4} {spacing.10}',
      borderRadius: 'md',
      border: '1px solid {colors.primary.100}',
    },
  },
  variants: {
    isClickable: {
      true: {
        root: {
          cursor: 'pointer',
        },
      },
    },
  },
});
