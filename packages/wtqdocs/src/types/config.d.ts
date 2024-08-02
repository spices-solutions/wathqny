type WathqnyConfig = {
  logo: string
  siteName?: string
  description?: string
  GSVToken?: string
  keywords?: string[]
  sidebar?: {
    label: string
    id?: string
  }[]
  OGImage?: {
    src: string
    alt: string
  }
  css?: {
    href: string
    rel?: string
    onload?: string
    media?: string
    as?: string
  }[] | string[]
  navbar?: {
    items: { href?: string; label?: string }[]
  }
  font?: '/font/GeistVF.woff2' | '/font/RubikVF.woff2' | string
}

export type { WathqnyConfig }
