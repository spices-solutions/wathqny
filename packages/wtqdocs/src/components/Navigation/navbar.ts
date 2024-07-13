const root = document.documentElement

document.querySelector('.theme-switcher')?.addEventListener('click', () => {
  if (root?.classList.contains('dark')) {
    root?.classList.replace('dark', 'light')
    localStorage.setItem('theme', 'light')
  } else {
    root?.classList.replace('light', 'dark')
    localStorage.setItem('theme', 'dark')
  }
})

const navbarToggle = document.querySelector('.wtq-toggle')
const navbar = document.querySelector('.wtq-links')

navbarToggle?.addEventListener('click', () => {
  navbar?.classList.toggle('wtq-active-links')
})

let data = {};

// Fetch the data from the JSON file
fetch('/search.json')
    .then(response => response.json())
    .then(json => {
        data = json;
        initializeSearch();
    })
    .catch(error => console.error('Error loading search data:', error));

function initializeSearch() {
    document.getElementById('search').addEventListener('input', function(event) {
        const query = event.target.value.toLowerCase();
        const results = [];

        if (query) {
            ['posts', 'docs'].forEach(type => {
                data[type].forEach(item => {
                    if (item.title.toLowerCase().includes(query) || item.body.toLowerCase().includes(query)) {
                        results.push({
                            title: item.title,
                            snippet: getSnippet(item.body, query),
                            link: item.link
                        });
                    }
                });
            });
        }

        displayResults(results);
    });
}

function getSnippet(body, query) {
    const index = body.toLowerCase().indexOf(query);
    if (index !== -1) {
        const snippetStart = Math.max(0, index - 30);
        const snippetEnd = Math.min(body.length, index + 30 + query.length);
        let snippet = body.substring(snippetStart, snippetEnd);

        // Highlight the query in the snippet
        const highlightedSnippet = snippet.replace(new RegExp(query, 'gi'), (match) => `<mark>${match}</mark>`);

        return `...${highlightedSnippet}...`;
    }
    return '';
}

function displayResults(results) {
    const searchContent = document.getElementById('search-content');
    searchContent.innerHTML = '';

    if (results.length > 0) {
        const ul = document.createElement('ul');
        results.forEach(result => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = result.link;
            a.textContent = result.title;

            const snippet = document.createElement('p');
            snippet.innerHTML = result.snippet;

            li.appendChild(a);
            li.appendChild(snippet);
            ul.appendChild(li);
        });
        searchContent.appendChild(ul);
    } else {
        searchContent.textContent = 'No results found';
    }
}

