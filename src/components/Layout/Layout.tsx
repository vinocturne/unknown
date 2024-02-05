import { ReactNode } from 'react'
import { layoutStyle } from './Layout.style'

interface LayoutProps {
  children?: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const style = layoutStyle()
  return (
    <div className={style.root}>
      <main className={style.main}>{children}</main>
    </div>
  )
}
