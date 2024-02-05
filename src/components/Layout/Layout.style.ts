import { sva } from '@styled-system/css'

export const layoutStyle = sva({
  slots: ['root', 'main'],
  base: {
    root: {
      minHeight: '100vh',
      position: 'relative',
      zIndex: 1
    },
    main: {
      flex: '1 0 auto',
      //   display: 'flex',
      //   flexDir: 'column',
      position: 'relative',
      height: '100%'
    }
  }
})
