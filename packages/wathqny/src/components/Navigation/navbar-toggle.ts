const navbarToggle = document.querySelector('.wtq-toggle')
const navbar = document.querySelector('.wtq-links')

navbarToggle?.addEventListener('click', () => {
  if (navbar?.classList.contains('wtq-active-links')) {
    navbar?.classList.remove('wtq-active-links')
    document.body.style.overflow = ''
  } else {
    navbar?.classList.add('wtq-active-links')
    document.body.style.overflow = 'hidden'
  }
})