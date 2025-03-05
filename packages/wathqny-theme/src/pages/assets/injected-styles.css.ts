import type { APIRoute } from 'astro'

import config from 'wathqny:config'

const Styles = config.font
  ? `
  @font-face {
    font-family: wtqfont;
    font-weight: 100 900;
    font-display: swap;
    src: url("${config.font}") format("woff2");
  }

  body {
    font-family: wtqfont, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`

  : `
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.wtq-brand {
  align-items: normal !important;
}
`

// @font-face {
//   font-family: 'Adjusted Arial Fallback';
//   src: local(Arial);
//   size-adjust: 100%;
//   ascent-override: 94%;
//   descent-override: 29%;
//   line-gap-override: 0%;
// }

// h1 {
//   font-family: 'GeistVF', 'Adjusted Arial Fallback';
// }

export const GET: APIRoute = () => {
  return new Response(Styles, {
    headers: {
      'Content-Type': 'text/css; charset=utf-8',
    },
  })
}
