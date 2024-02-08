import { ReactNode } from 'react';
import { layoutStyle } from './Layout.style';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Header from './Header/Header';
import { css } from '@styled-system/css';

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const style = layoutStyle();
  return (
    <div className={style.root}>
      <Header />
      <main className={style.main}>{children}</main>
      <SpeedInsights />
    </div>
  );
}
