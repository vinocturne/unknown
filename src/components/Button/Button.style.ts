import { RecipeVariantProps, cva } from '@styled-system/css'

export const buttonStyle = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 'token(spacing.4)',
    padding: '0 token(spacing.12)',
    fontWeight: '500',
    borderRadius: 'md',
    whiteSpace: 'nowrap',
    cursor: 'pointer'
  },
  variants: {
    size: {
      xs: {
        minWidth: 'token(sizes.button.xs)',
        height: 'token(sizes.button.xs)',
        textStyle: '12',
        borderRadius: 6
      },
      sm: {
        minWidth: 'token(sizes.button.sm)',
        height: 'token(sizes.button.sm)',
        borderRadius: 6,
        textStyle: '13'
      },
      md: {
        minWidth: 'token(sizes.button.md)',
        height: 'token(sizes.button.md)',
        textStyle: '14'
      },
      lg: {
        pt: '1px',
        minWidth: 'token(sizes.button.lg)',
        height: 'token(sizes.button.lg)',
        textStyle: '16'
      }
    },
    rounded: {
      true: { borderRadius: '999px' }
    },
    inlined: {
      true: {
        display: 'inline-flex'
      },
      false: {
        width: '100%'
      }
    },
    visual: {
      funky: { border: 'none' },
      edgy: { border: '1px solid', bg: 'white' }
    },
    color: {
      primary: {
        color: 'primary.400',
        '&:active': {
          backgroundColor: 'primary.600'
        }
      },
      secondary: {
        color: 'secondary',
        '&:active': {
          backgroundColor: 'secondary.500'
        }
      },
      dark: {
        color: 'gray.950'
      },
      gray: {
        color: 'gray.700'
      },
      light: {},
      kakao: {}
    },
    lined: {
      false: {
        border: 'none'
      }
    },
    noSpace: {
      true: {
        gap: 0,
        padding: 0
      }
    },
    disabled: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      visual: 'edgy',
      color: 'primary',
      css: {
        borderColor: 'primary',
        color: 'primary.400',
        _disabled: {
          color: 'gray.400',
          borderColor: 'gray.100'
        }
      }
    },
    {
      visual: 'funky',
      color: 'primary',
      css: {
        background: 'primary.400',
        color: 'white',
        border: 'none',
        _disabled: {
          background: 'gray.100',
          color: 'gray.400'
        }
      }
    },

    {
      visual: 'edgy',
      color: 'secondary',
      css: {
        borderColor: 'secondary',
        color: 'secondary',
        _disabled: {
          color: 'gray.400',
          borderColor: 'gray.100'
        }
      }
    },
    {
      visual: 'funky',
      color: 'secondary',
      css: {
        background: 'secondary',
        color: 'white',
        border: 'none',
        _disabled: {
          background: 'gray.100',
          color: 'gray.400'
        }
      }
    },

    {
      visual: 'edgy',
      color: 'dark',
      css: {
        borderColor: 'gray.950',
        color: 'gray.950',
        _disabled: {
          color: 'gray.400',
          borderColor: 'gray.100'
        }
      }
    },
    {
      visual: 'funky',
      color: 'dark',
      css: {
        background: 'gray.950',
        color: 'white',
        border: 'none',
        _disabled: {
          background: 'gray.100',
          color: 'gray.400'
        }
      }
    },

    {
      visual: ['edgy', 'funky'],
      color: 'light',
      css: {
        background: 'white',
        border: '1px solid token(colors.gray.200)',
        color: 'gray.700'
      }
    },
    {
      visual: ['edgy', 'funky'],
      color: 'kakao',
      css: {
        background: 'yellow',
        color: 'gray'
      }
    },
    {
      inlined: true,
      lined: false,
      css: {
        padding: '0',
        minWidth: 'auto'
      }
    }
  ],
  defaultVariants: {
    size: 'lg',
    inlined: false,
    visual: 'funky',
    color: 'primary'
  }
})

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>
