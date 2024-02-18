'use client';
import { css } from '@styled-system/css';
import MainList from './components/MainList/MainList';
import Carousel from './components/Carousel/Carousel';
import MiniBoard from './components/MiniBoard/MiniBoard';

export default function Home() {
  return (
    <main
      className={css({
        display: 'flex',
        flexDir: 'column',
        height: '100%',
        padding: '{spacing.8} {spacing.16}',
        gap: '{spacing.16}',
      })}
    >
      <MainList />
      <Carousel />
      <MiniBoard />
    </main>
  );
}
