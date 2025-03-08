import { defineConfig, passthroughImageService } from 'astro/config';
import Wathqny from 'wathqny';
// import ThemeStyles from 'wathqny/styles?url'

// https://astro.build/config
export default defineConfig({
  site: 'https://wathqny.pages.dev/',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  image: {
    service: passthroughImageService(),
    domains: ['api.github.com', 'avatars.githubusercontent.com'],
  },
  experimental: {
    svg: true,
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'material-theme-lighter',
        dark: 'material-theme-darker',
      },
    },
  },
  integrations: [
    Wathqny({
      config: {
        logo: '/icon.svg',

        siteName: 'wathqny',
        GSVToken: 'uscYyrV8FUN5a4JacVB4TIl0dpHe9lJNGQevQRoLCr4',
        OGImage: {
          src: '/og.png',
          alt: "Logo of wathqny, featuring Arabic text in green that translates to 'wathqny' with a tagline below in black text that reads 'Where Arab Technology Shines'.",
        },
        description:
          'wathqny a fast, easy and accessible Astro powered documentation site framework',
        keywords: [
          'ui',
          'site',
          'easy',
          'fast',
          'accessible',
          'docs',
          'documentation',
          'css',
          'html',
          'js',
          'framework',
          'library',
        ],
        sidebar: [
          {
            label: 'Getting started',
            id: 'getting-started',
          },
          {
            label: 'test',
            id: 'test',
          },
        ],
        navbar: {
          items: [
            {
              label: 'docs',
              href: '/docs/',
            },
            {
              label: 'blog',
              href: '/blog',
            },
          ],
        },
        // css: ['/injected.css', ThemeStyles],
        // font: '/font/GeistVF.woff2',
      },
    }),
  ],
})
