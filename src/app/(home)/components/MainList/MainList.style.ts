import { sva } from '@styled-system/css';

export const mainListStyle = sva({
  slots: ['label', 'container', 'list', 'item'],
  base: {
    label: {
      paddingLeft: '{spacing.8}',
      color: 'gray.500',
      textStyle: '14',
      fontWeight: '{fontWeights.700}',
      marginBottom: '{spacing.8}',
    },
    container: {
      border: '1px solid {colors.gray.100}',
      color: 'gray.950',
      padding: '{spacing.8} {spacing.8}',
      borderRadius: 'md',
    },
    list: {
      paddingLeft: '24px',
    },
    item: {
      listStyleType: 'disc',
      color: 'gray.800',
      '&::marker': {
        color: 'gray.500',
      },
    },
  },
});
