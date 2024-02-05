export const keyframes = {
  shimmer: {
    '0%': {
      transform: 'translateX(-100%)'
    },
    '50%': {
      transform: 'translateX(-40%)'
    },
    '100%': {
      transform: 'translate(100%)'
    }
  },
  tooltipIn: {
    from: {
      opacity: 0,
      transform: 'translateY(-10px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },
  tooltipOut: {
    fadeOut: {
      from: {
        opacity: 1,
        transform: 'translateY(0)'
      },
      to: {
        opacity: 0,
        transform: 'translateY(-10px)'
      }
    }
  }
}
