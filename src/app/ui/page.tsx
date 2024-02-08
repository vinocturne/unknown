'use client';

import Avatar from '@/components/Avatar/Avatar';
import { Button } from '@/components/Button';
import { CheckBox } from '@/components/CheckBox';
import Chip from '@/components/Chip/Chip';
import { TextField } from '@/components/Input';
import { RadioGroup } from '@/components/RadioGroup';
import { Tabs } from '@/components/Tabs';
import { css } from '@styled-system/css';

export default function UITestPage() {
  return (
    <main
      className={css({
        display: 'inline-flex',
        flexDir: 'column',
        height: '100dvh',
      })}
    >
      <span>well we have to start it</span>
      <span>well we have to start it</span>
      <div
        className={css({
          width: '300px',
          display: 'flex',
          flexDir: 'column',
          gap: '{spacing.10}',
        })}
      >
        <TextField placeholder="hello" />
        <CheckBox label={'아아아'} />
        <Button>버튼</Button>
        <Tabs
          tabList={[
            { label: '홈', value: 'home' },
            { label: '커뮤니티', value: 'community' },
          ]}
        />
        <RadioGroup
          list={[
            { label: '홈', value: 'home' },
            { label: '커뮤니티', value: 'community' },
          ]}
        />
        <div className={css({ position: 'absolute', top: 10, right: 0 })}>
          <Avatar width={35} height={35} isCircle />
        </div>
        <div>
          <Chip data={{ label: '전체' }} isClickable />
        </div>
      </div>
    </main>
  );
}
