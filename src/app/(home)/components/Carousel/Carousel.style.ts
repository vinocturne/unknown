import { sva } from '@styled-system/css';

export const carouselStyle = sva({
  slots: ['label', 'container', 'bannerList', 'item', 'image'],
  base: {
    label: {
      paddingLeft: '{spacing.8}',
      color: 'gray.500',
      textStyle: '14',
      fontWeight: '{fontWeights.700}',
      marginBottom: '{spacing.8}',
    },
    container: {
      overflow: 'hidden',
      height: '300px',
    },
    bannerList: { display: 'flex', gap: '10px', height: '300px', touchAction: 'pan-y', justifyContent: 'flex-start' },
    item: {
      flex: '0 0 300px',
      overflow: 'hidden',
      minWidth: 0,
      borderRadius: 'md',

      paddingRight: '{spacing.16}',
    },
    image: {
      overflow: 'hidden',
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      borderRadius: 'md',
    },
  },
});
