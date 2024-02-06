'use client'

import { UseFormRegisterReturn } from 'react-hook-form'
import { useState } from 'react'

import { RadioGroup as RadioGroupComponent } from '@ark-ui/react'

import { cx } from '@styled-system/css'

import RadioGroupStyle from './RadioGroup.style'

interface RadioGroupProps {
  list: { label: string; value: string }[]
  value?: string
  direction?: 'column' | 'row'
  register?: UseFormRegisterReturn
  onChange?: (value: string) => void
  disabled?: boolean
  sx?: string
}

/*
    <RadioGroup
       // react-hook-form
       register={ // register 추가 }
       onChange={ // onChange 추가 } // 필요에 따라 사용

       value={ // 값 설정 } // 필요에 따라 사용

       // 리스트 옵션
       list={[
         { label: '테스트1', value: 'test1' },
         { label: '테스트2', value: 'test2' },
         { label: '테스트3', value: 'test3' }
       ]}

       // 스타일 관련
       direction={'row' | 'column'} // default: row
       disabled={true}
     />
   */

const RadioGroup = ({
  list,
  register,
  direction = 'row',
  value,
  onChange,
  disabled,
  sx
}: RadioGroupProps) => {
  const [selected, setSelected] = useState(value ?? '')
  const radioGroupStyle = RadioGroupStyle({ direction: direction })

  const handleClick = (detail: { value: string }) => {
    if (register) {
      register?.onChange({ target: { name: register.name, ...detail } })
    }
    onChange?.(detail.value)
    setSelected(detail.value)
  }

  return (
    <>
      <RadioGroupComponent.Root
        className={radioGroupStyle.container}
        onValueChange={handleClick}
        defaultValue={selected}
        disabled={disabled}
      >
        <div className={cx(radioGroupStyle.listContainer, sx)}>
          {list.map(el => (
            <RadioGroupComponent.Item
              key={el.value}
              value={el.value}
              className={radioGroupStyle.itemContainer}
            >
              <RadioGroupComponent.ItemControl
                className={radioGroupStyle.itemControl}
              />
              <RadioGroupComponent.ItemText
                className={radioGroupStyle.itemText}
              >
                {el.label}
              </RadioGroupComponent.ItemText>
            </RadioGroupComponent.Item>
          ))}
        </div>
      </RadioGroupComponent.Root>
    </>
  )
}

export { RadioGroup }
