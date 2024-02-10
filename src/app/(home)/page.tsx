'use client';
import { css } from '@styled-system/css';
import MainList from './components/MainList/mainList';

export default function Home() {
  return (
    <main
      className={css({
        display: 'flex',
        flexDir: 'column',
        height: '100%',
        padding: '{spacing.8} {spacing.16}',
      })}
    >
      <MainList />
    </main>
  );
}
