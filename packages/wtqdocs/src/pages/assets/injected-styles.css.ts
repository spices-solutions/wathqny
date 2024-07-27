import type { APIRoute } from 'astro'

import type { WathqnyConfig as WathqnyConfigType } from '../../types/config'

// @ts-ignore
import untypedWathqnyConfig from '/wathqny.config'
const WathqnyConfig: WathqnyConfigType = untypedWathqnyConfig

const Styles = `
@font-face {
  font-family: wtqfont;
  font-weight: 100 900;
  font-display: swap;
  src: url("${WathqnyConfig.font}") format("woff2");
}

body {
  font-family: wtqfont, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
`

export const GET: APIRoute = () => {
  return new Response(Styles, {
    headers: {
      'Content-Type': 'text/css; charset=utf-8',
    },
  })
}
