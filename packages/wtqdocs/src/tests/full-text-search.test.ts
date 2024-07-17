import { bench, describe, expect, it } from 'vitest'
import FullTextSearch from '../components/full-text-search'
import data from './search.json'

describe('full text search', () => {
  const keysToSearch = ['title', 'link']

  // it('', () => {
  //   const fullTextSearch = new FullTextSearch(
  //     [...data.posts, ...data.docs],
  //     keysToSearch,
  //   )
  //   expect(fullTextSearch.search('codeblocks')).toStrictEqual([
  //     {
  //       link: '/docs/getting-started/codeblocks',
  //       title: 'codeblocks',
  //     },
  //   ])
  // })
  bench('', () => {
    const fullTextSearch = new FullTextSearch(
      [...data.posts, ...data.docs],
      keysToSearch,
    )
    expect(fullTextSearch.search('codeblocks')).toStrictEqual([
      {
        link: '/docs/getting-started/codeblocks',
        title: 'codeblocks',
      },
    ])
  })
})
