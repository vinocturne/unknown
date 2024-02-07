import { Tabs } from '@/components/Tabs'
import { css } from '@styled-system/css'

export default function Header() {
  return (
    <div
      className={css({
        borderBottom: '1px solid {colors.gray.100}',
        padding: '24px'
      })}
    >
      <Tabs
        tabList={[
          { label: '홈', value: 'home' },
          { label: '커뮤니티', value: 'community' }
        ]}
        defaultValue={'home'}
        cn={{ root: css({ maxWidth: '600px', margin: '0 auto' }) }}
      />
    </div>
  )
}
