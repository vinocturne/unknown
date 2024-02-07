import { defineConfig, defineGlobalStyles } from '@pandacss/dev'

import { pandaPreset } from '@preset/index'

const globalCss = defineGlobalStyles({
  'html,body': {
    fontFamily:
      '"Pretendard Variable", "Spoqa Han Sans Neo", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    letterSpacing: '-0.3px',
    WebkitTapHighlightColor: 'transparent'
  }
})
export default defineConfig({
  presets: [pandaPreset],
  preflight: true,
  jsxFramework: 'react',

  // Where to look for your css declarations
  include: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
    './stories/**/*.{js,jsx,ts,tsx}'
  ],
  outdir: 'styled-system',
  globalCss
})
