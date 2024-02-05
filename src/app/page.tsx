import { css } from '@styled-system/css'

export default function Home() {
  return (
    <main
      className={css({
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'space-between'
      })}
    >
      <span>well we have to start it</span>
      <span>well we have to start it</span>
    </main>
  )
}
