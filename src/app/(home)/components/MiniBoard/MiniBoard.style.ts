import { sva } from '@styled-system/css';

export const miniBoardStyle = sva({
  slots: ['root', 'label', 'container', 'list', 'item', 'image', 'rank', 'info', 'detail', 'title'],
  base: {
    root: { display: 'flex', flexDir: 'column', gap: '{spacing.6}' },
    label: {
      paddingLeft: '{spacing.8}',
      color: 'gray.500',
      textStyle: '14',
      fontWeight: '{fontWeights.700}',
      marginBottom: '{spacing.8}',
    },
    container: {
      display: 'flex',
      gap: '{spacing.8}',
      backgroundColor: '{colors.gray.50}',
      borderRadius: 'md',
      padding: '{spacing.12} {spacing.12}',
    },
    list: {
      display: 'flex',
      flexDir: 'column',
      gap: '{spacing.8}',
      width: '50%',
    },
    item: {
      padding: '{spacing.14} {spacing.12}',
      display: 'flex',
      flex: '0 0 80px',
      overflow: 'hidden',
      minWidth: 0,
      backgroundColor: 'white',
      borderRadius: 'md',
      alignItems: 'center',
      '&.selected': {
        position: 'relative',
        backgroundColor: 'primary.50',
        width: '120%',
      },
    },
    image: {
      borderRadius: 'md',
      overflow: 'hidden',
      height: '100%',
      //   width: '100%',
      objectFit: 'cover',
    },
    rank: {
      padding: '0 {spacing.18}',
      fontSize: '16px',
      fontWeight: '{fontWeights.700}',
    },
    info: {
      fontSize: '12px',
    },
    detail: {
      zIndex: 9999,
      width: '50%',
      height: '100%',
      backgroundColor: 'primary.50',
      margin: '{0 spacing.8}',
      borderRadius: 'md',
      padding: '{spacing.12} {spacing.12}',
    },
    title: {
      color: '{colors.primary.400}',
      fontSize: '16px',
      fontWeight: '{fontWeights.700}',
    },
  },
});
