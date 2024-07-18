import FullTextSearch from './full-text-search'

;(async () => {
  const data = await (await fetch('/search.json')).json()
  const searchInputContent = document.querySelector('.wtq-search-content')
  const keysToSearch = ['title', 'link']
  const fullTextSearch = new FullTextSearch(
    [...data.posts, ...data.docs],
    keysToSearch,
  )

  // Set up the event listener for the search input
  const searchInput = document.getElementById('search')
  searchInput.addEventListener('input', () => {
    const query = searchInput.value
    const results = fullTextSearch.search(query)
    searchInputContent.innerHTML = ''
    results.forEach((result) => {
      searchInputContent.innerHTML += `
        <li>
          <a class="wtq-focusable" href=${result.link}>
            <span class="wtq-title-search">${result.title}</span>
          </a>
        </li>
      `
    })
  })
})()
