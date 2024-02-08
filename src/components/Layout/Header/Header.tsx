import Avatar from '@/components/Avatar/Avatar';
import { Tabs } from '@/components/Tabs';
import { css } from '@styled-system/css';
import Image from 'next/image';

export default function Header() {
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid {colors.gray.100}',
        padding: '14px',
      })}
    >
      <div
        className={css({
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '700px',
          margin: '0 auto',
        })}
      >
        <Tabs
          tabList={[
            { label: '홈', value: '' },
            { label: '커뮤니티', value: 'community' },
          ]}
          defaultValue={''}
          isHeader
        />
        <div className={css({ position: 'absolute', top: -7, right: 0 })}>
          <Avatar width={35} height={35} isCircle />
        </div>
      </div>
    </div>
  );
}
