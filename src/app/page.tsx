'use client'

import { Button } from '@/components/Button'
import { CheckBox } from '@/components/CheckBox'
import { TextField } from '@/components/Input'
import { Tabs } from '@/components/Tabs'
import { css } from '@styled-system/css'

export default function Home() {
  return (
    <main
      className={css({
        display: 'flex',
        flexDir: 'column',
        // justifyContent: 'space-between',
        height: '100dvh'
      })}
    >
      <span>well we have to start it</span>
      <span>well we have to start it</span>
      <div
        className={css({
          width: '300px'
        })}
      >
        <TextField />
        <CheckBox label={'아아아'} />
        <Button>버튼</Button>
        <Tabs
          tabList={[
            { label: '홈', value: 'home' },
            { label: '커뮤니티', value: 'community' }
          ]}
        />
      </div>
    </main>
  )
}
