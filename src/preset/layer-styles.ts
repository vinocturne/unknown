import { defineLayerStyles } from '@pandacss/dev'

export const layerStyles = defineLayerStyles({
  default: {
    description: 'page default styles',
    value: {
      padding: '0 token(spacing.16)'
    }
  },
  section1: {
    description: 'section default styles',
    value: {
      padding: 'token(spacing.24) token(spacing.16)'
    }
  },
  section2: {
    description: 'section default styles',
    value: {
      padding: 'token(spacing.20) token(spacing.16)'
    }
  }
})
