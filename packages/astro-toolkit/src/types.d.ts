export interface Link extends Omit<HTMLLinkElement, 'sizes'> {
  prefetch: boolean
  crossorigin: string
  sizes: string
}

export interface Meta extends HTMLMetaElement {
  property: string
}

export type Props = {
  title?: string | undefined
  description?: string | undefined
  OGImage?: {
    src: string | undefined
    alt: string | undefined
  }
  keywords?: string | string[] | undefined
  GSVToken?: string
  /**
   * @default "/sitemap-index.xml"
   */
  sitemap?: boolean
  /**
   * google-site-verification token
   */
  GSVToken: string
  /**
   * @default "index, follow"
   */
  robots?: string
  extend?: {
    link?: Partial<Link>[]
    meta?: Partial<Meta>[]
  }
}
