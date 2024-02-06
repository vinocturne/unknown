import { TabList, TabTrigger, TabsRoot } from '@ark-ui/react'
import { useState } from 'react'
import { tabsStyle } from './Tabs.style'
import { motion } from 'framer-motion'

interface TabsProps {
  tabList: { label: string; value: string }[]
}

export const Tabs = ({ tabList }: TabsProps) => {
  const [value, setValue] = useState<string | null>('abc')

  const style = tabsStyle()

  return (
    <TabsRoot
      value={value}
      onValueChange={e => setValue(e.value)}
      className={style.root}
    >
      <TabList className={style.list}>
        {tabList.map((tab, index) => (
          <TabTrigger
            key={index}
            className={style.trigger}
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
