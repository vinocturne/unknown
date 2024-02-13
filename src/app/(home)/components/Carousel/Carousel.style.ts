import { sva } from '@styled-system/css'

export const carouselStyle = sva({
  slots: [
    'root',
    'label',
    'container',
    'bannerList',
    'item',
    'image',
    'rank',
    'bottomInfo',
    'info',
    'gameName',
    'published'
  ],
  base: {
    root: {
      display: 'flex',
      flexDir: 'column',
      gap: '{spacing.6}'
    },
    label: {
      paddingLeft: '{spacing.8}',
      color: 'gray.500',
      textStyle: '14',
      fontWeight: '{fontWeights.700}',
      marginBottom: '{spacing.8}'
    },
    container: {
      overflow: 'hidden',
      height: '300px'
    },
    bannerList: {
      display: 'flex',
      gap: '10px',
      height: '300px',
      touchAction: 'pan-y',
      justifyContent: 'flex-start'
    },
    item: {
      position: 'relative',
      flex: '0 0 300px',
      overflow: 'hidden',
      minWidth: 0,
      borderRadius: 'md',
      paddingRight: '{spacing.16}'
    },
    image: {
      overflow: 'hidden',
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      borderRadius: 'md',
      border: '2px solid {colors.primary.800}'
    },
    bottomInfo: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'flex-end',
      left: 0,
      bottom: 0,
      gap: '{spacing.8}'
    },
    rank: {
      fontSize: '125px',
      lineHeight: '100px',
      textShadow: '3px 3px 3px {colors.gray.500}',
      fontWeight: '{fontWeights.700}',
      color: 'white'
    },
    info: {
      display: 'flex',
      flexDir: 'column',
      // gap: '{spacing.4}',
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 'md',
      padding: '{spacing.4} {spacing.8}'
    },
    gameName: {
      textStyle: '24',
      fontWeight: '{fontWeights.700}'
    },
    published: {
      textStyle: '12'
    }
  }
})
