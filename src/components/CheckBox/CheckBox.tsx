'use client'

import { cx } from '@styled-system/css'
import { checkBoxStyle } from './CheckBox.style'
import { Checkbox, CheckboxLabel } from '@ark-ui/react'
import { Icon } from '@components/Icon'

interface CheckBoxProps {
  cn?: { root?: string; container?: string; checkBox?: string }
  label?: string
  isForwardLabel?: boolean
}

export const CheckBox = ({
  cn,
  label,
  isForwardLabel = false
}: CheckBoxProps) => {
  const style = checkBoxStyle()
  return (
    <>
      <Checkbox.Root className={cx(style.root, cn?.root)}>
        {api => (
          <div className={cx(style.container, cn?.container)}>
            {isForwardLabel && <CheckboxLabel>{label}</CheckboxLabel>}
            <Checkbox.Control className={cx(style.checkBox, cn?.checkBox)}>
              {api.isChecked ? (
                <Icon
                  name={'check'}
                  width={14}
                  height={14}
                  stroke="white"
                />
              ) : null}
            </Checkbox.Control>
            {!isForwardLabel && <CheckboxLabel>{label}</CheckboxLabel>}
          </div>
        )}
      </Checkbox.Root>
    </>
  )
}
