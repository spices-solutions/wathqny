import { bench, describe, expect, it } from 'vitest'
import FullTextSearch from '../components/full-text-search'
import data from './search.json'

describe('full text search', () => {
  
  bench('one key', () => {
    const keysToSearch = ['title']
    const fullTextSearch = new FullTextSearch(
      [...data.posts, ...data.docs],
      keysToSearch,
    )
fullTextSearch.search('codeblocks')
  })
  bench('tow keys', () => {
    const keysToSearch = ['title','link']
    const fullTextSearch = new FullTextSearch(
      [...data.posts, ...data.docs],
      keysToSearch,
    )
fullTextSearch.search('codeblocks')
  })
})
