import React, { ReactNode, Ref, forwardRef } from 'react'
import { ButtonVariants, buttonStyle } from './Button.style'
import { cx } from '@styled-system/css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  children?: ReactNode
  loading?: boolean
  disabled?: boolean
  cn?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = forwardRef(
  (
    {
      type,
      text,
      children,
      size,
      rounded = false,
      inlined = false,
      lined,
      color,
      noSpace,
      visual,
      cn,
      onClick,
      loading = false,
      disabled = false,
      ...rest
    }: ButtonProps & ButtonVariants,
    buttonRef: Ref<HTMLButtonElement>
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!(loading && disabled)) {
        onClick?.(event)
      }
    }

    return (
      <button
        ref={buttonRef}
        type={type}
        className={cx(
          buttonStyle({
            size,
            rounded,
            inlined,
            visual,
            color,
            lined,
            noSpace,
            disabled
          }),
          cn
        )}
        disabled={disabled}
        onClick={handleClick}
      >
        {text || children}
      </button>
    )
  }
)
