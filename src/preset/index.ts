import { definePreset } from '@pandacss/dev'

import { textStyles } from './text-styles'
import { layerStyles } from './layer-styles'
import { keyframes } from './keyframes'
import components from './components'

import type { Preset } from '@pandacss/types'

export const pandaPreset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: {
          white: { value: '#fff' },
          black: { value: '#000' },
          gray: {
            DEFAULT: { value: '#222' },
            50: { value: '#F6F8FA' },
            100: { value: '#E8ECF0' },
            150: { value: '#D9DFE5' },
            200: { value: '#DBE0E5' },
            250: { value: '#EEE' },
            300: { value: '#C5CCD3' },
            400: { value: '#B1B6BE' },
            450: { value: '#A7A7A7' },
            500: { value: '#9EA3AC' },
            600: { value: '#888D97' },
            700: { value: '#73777F' },
            800: { value: '#606369' },
            900: { value: '#3C3F46' },
            950: { value: '#2B2E35' }
          },
          primary: {
            DEFAULT: { value: '#5d80e2' },
            50: { value: '#e8edfb' },
            100: { value: '#d1dbf7' },
            200: { value: '#bac8f3' },
            300: { value: '#5d80e2' },
            350: { value: '#2f5bda' },
            400: { value: '#1849d6' },
            450: { value: '#1642C1' },
            500: { value: '#0E2C80' },
            600: { value: '#0A1D56' },
            700: { value: '#071640' },
            800: { value: '#050F2B' }
          },
          secondary: {
            DEFAULT: { value: '#ffab5f' },
            bg: { value: 'rgba(255, 217, 194, 0.5)' },
            500: { value: '#ffab5f' }
          },
          error: {
            DEFAULT: { value: '#F21414' },
            500: { value: '#F21414' },
            550: { value: '#ED5555' },
            600: { value: '#D21414' }
          },
          navy: {
            DEFAULT: { value: '#004080' }
          },
          yellow: {
            DEFAULT: { value: '#FEE500' }
          },
          backdrop: {
            DEFAULT: { value: 'rgba(34, 34, 34, 0.50)' }
          }
        },
        spacing: {
          DEFAULT: { value: '8px' },
          2: { value: '2px' },
          4: { value: '4px' },
          6: { value: '6px' },
          8: { value: '8px' },
          10: { value: '10px' },
          12: { value: '12px' },
          14: { value: '14px' },
          16: { value: '16px' },
          18: { value: '18px' },
          20: { value: '20px' },
          24: { value: '24px' },
          30: { value: '30px' },
          32: { value: '32px' },
          40: { value: '40px' }
        },
        sizes: {
          sm: { value: '42px' },
          lg: { value: '52px' },

          button: {
            xs: { value: '30px' },
            sm: { value: '36px' },
            md: { value: '42px' },
            lg: { value: '52px' }
          },

          layout: {
            width: { value: '500px' },
            nav: {
              top: { value: '56px' },
              bottom: { value: '58px' }
            }
          },

          ...components
        },
        fonts: {
          body: { value: 'Pretendard, SpoqaHanSansNeo' }
        },
        fontSizes: {
          10: { value: '10px' },
          11: { value: '11px' },
          12: { value: '12px' },
          13: { value: '13px' },
          14: { value: '14px' },
          15: { value: '15px' },
          16: { value: '16px' },
          18: { value: '18px' },
          20: { value: '20px' },
          22: { value: '22px' },
          24: { value: '24px' },
          26: { value: '26px' }
        },
        lineHeights: {
          12: { value: '12px' },
          18: { value: '18px' },
          20: { value: '20px' },
          22: { value: '22px' },
          24: { value: '24px' },
          28: { value: '28px' },
          30: { value: '30px' },
          32: { value: '32px' },
          34: { value: '34px' }
        },
        fontWeights: {
          700: { value: 700 },
          600: { value: 600 },
          500: { value: 500 },
          400: { value: 400 }
        },
        zIndex: {
          nav: {
            top: { value: 20 },
            bottom: { value: 20 }
          },
          bottomSheet: { value: 30 },
          select: { value: 31 },
          tooltip: { value: 32 }
        },
        radii: {
          sm: { value: '4px' },
          md: { value: '8px' },
          lg: { value: '16px' },
          full: { value: '9999px' },
          modal: { value: '12px' }
        },
        borders: {},
        shadows: {
          toast: { value: '0px 4px 10px 0px rgba(0, 0, 0, 0.16)' }
        },
        easings: {},
        opacity: {},
        assets: {},
        animations: {}
      },
      semanticTokens: {
        spacing: {
          rootSpace: { value: '{spacing.16}' }
        }
      },
      textStyles,
      layerStyles,
      keyframes
    }
  }
}) as Preset
