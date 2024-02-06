'use client'

import { Ref, forwardRef, useState } from 'react'
import { textFieldStyle } from './TextField.style'
import { cx } from '@styled-system/css'

import { UseFormRegisterReturn } from 'react-hook-form'

interface InputProps {
  type?: string
  cn?: { root?: string; input?: string }
  maxLength?: number
  onChange?: (value: string) => void
  autoFocus?: boolean
  name?: string
  register?: UseFormRegisterReturn
  placeholder?: string
  disabled?: boolean
}

export const TextField = forwardRef(
  (
    {
      type = 'text',
      cn,
      name,
      onChange,
      maxLength,
      autoFocus,
      register,
      placeholder,
      disabled = false
    }: InputProps & React.InputHTMLAttributes<HTMLInputElement>,
    inputRef: Ref<HTMLInputElement>
  ) => {
    const style = textFieldStyle()
    const [inputValue, setInputValue] = useState('')

    const handleChange = (value: string) => {
      register?.onChange({
        target: { name: register.name, value }
      })
      onChange?.(value)
    }

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setInputValue(value)
      handleChange(value)
    }

    const inputProps = {
      type,
      maxLength,
      autoFocus,
      value: inputValue,
      name: name || register?.name,
      placeholder,
      disabled
    }
    return (
      <div className={cx(style.root, cn?.root)}>
        <input
          className={cx(style.input, cn?.input)}
          onInput={onInputChange}
          {...inputProps}
          ref={inputRef}
        />
      </div>
    )
  }
)
