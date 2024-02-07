'use client'

import { TabList, TabTrigger, TabsRoot } from '@ark-ui/react'
import { useState } from 'react'
import { tabsStyle } from './Tabs.style'
import { motion } from 'framer-motion'
import { cx } from '@styled-system/css'

interface TabsProps {
  tabList: { label: string; value: string }[]
  defaultValue?: string
  cn?: { root?: string; list?: string; trigger?: string }
}

export const Tabs = ({ tabList, defaultValue, cn }: TabsProps) => {
  const [value, setValue] = useState<string | null>(defaultValue ?? '')

  const style = tabsStyle()

  return (
    <TabsRoot
      value={value}
      onValueChange={e => setValue(e.value)}
      className={cx(style.root, cn?.root)}
    >
      <TabList className={cx(style.list, cn?.list)}>
        {tabList.map((tab, index) => (
          <TabTrigger
            key={index}
            className={cx(style.trigger, cn?.trigger)}
            value={tab.value}
            data-selected={value === tab.value}
          >
            <span>{tab.label}</span>
            {tab.value === value ? (
              <motion.div
                className={style.underline}
                layoutId={`tabs_underline`}
              />
            ) : null}
          </TabTrigger>
        ))}
      </TabList>
    </TabsRoot>
  )
}
