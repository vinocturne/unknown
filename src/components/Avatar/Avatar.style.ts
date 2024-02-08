import { sva } from '@styled-system/css';

export const avatarStyle = sva({
  slots: ['root', 'image'],
  base: {
    root: {
      //   position: 'relative',
    },
    image: {
      //   position: 'absolute',
      //   left: 0,
      //   top: 0,
    },
  },
  variants: {
    isCircle: {
      true: {
        root: {
          borderRadius: '100%',
          overflow: 'hidden',
        },
      },
    },
  },
});
