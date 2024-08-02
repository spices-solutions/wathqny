const navbarToggle = document.querySelector('.wtq-toggle')
const navbar = document.querySelector('.wtq-links')

navbarToggle?.addEventListener('click', () => {
  const navbar = document.querySelector('.wtq-links')
  navbar?.classList.toggle('wtq-active-links')
})

navbar?.classList.toggle('wtq-active-links')
