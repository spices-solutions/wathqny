import FullTextSearch from './full-text-search'

interface SearchData {
  posts: { title: string; link: string }[]
  docs: { title: string; link: string }[]
}

// Function to fetch JSON data
const fetchData = async (url: string): Promise<SearchData> => {
  const response = await fetch(url)
  return response.json()
}

const data = await fetchData('/search.json')
const searchInputContent = document.querySelector(
  '.wtq-search-content',
) as HTMLUListElement
const keysToSearch = ['title', 'link']
const fullTextSearch = new FullTextSearch(
  [...data.posts, ...data.docs],
  keysToSearch,
)

// Set up the event listener for the search input
const searchInput = document.getElementById('search') as HTMLInputElement
searchInput.addEventListener('input', () => {
  const query = searchInput.value
  const results = fullTextSearch.search(query)
  searchInputContent.innerHTML = ''
  results.forEach((result: { title: string; link: string }) => {
    searchInputContent.innerHTML += `
        <li>
          <a class="wtq-focusable wtq-rounded" href=${result.link}>
            <span class="wtq-title-search">${result.title}</span>
          </a>
        </li>
      `
  })
})
