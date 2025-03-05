const sidebar = document.querySelector('.wtq-sidebar') as HTMLElement

const sidebarOverlay = document.querySelector(
  '.wtq-sidebar-overlay',
) as HTMLElement

const sidebarCollapseBtn = sidebar.querySelector(
  '.wtq-collapse-button',
) as HTMLElement

const toggle = document.querySelector('.wtq-nav-menu') as HTMLElement

function sidebarShrinkAndLock() {
  if (sidebar?.classList.contains('wtq-show')) {
    sidebar?.classList.remove('wtq-show')
    document.body.style.overflow = ''
    sidebarOverlay.classList.remove('wtq-show')
  } else {
    document.body.style.overflow = 'hidden'
    sidebar?.classList.add('wtq-show')
    sidebarOverlay.classList.add('wtq-show')
  }
}

toggle?.addEventListener('click', sidebarShrinkAndLock)

sidebarOverlay?.addEventListener('click', sidebarShrinkAndLock)

sidebarCollapseBtn?.addEventListener('click', () => {
  sidebar.classList.toggle('wtq-aside-collapse')
})

const categoryItems = sidebar?.querySelectorAll(
  '.wtq-sidebar-category .wtq-category_collapse--wrapper',
) as NodeListOf<HTMLElement>

// biome-ignore lint/complexity/noForEach: <explanation>
categoryItems?.forEach((categoryItem) => {
  const categoryCollapse = categoryItem.querySelector(
    '.wtq-category-collapse',
  ) as HTMLElement
  const categoryToggle = categoryItem.querySelector(
    '.wtq-category-toggle',
  ) as HTMLElement
  const categoryLinks = categoryItem.querySelectorAll(
    '.wtq-collapse_item--link',
  ) as NodeListOf<HTMLElement>

  categoryToggle?.addEventListener('click', () => {
    const isActive = categoryItem.classList.contains('wtq-active')
    // biome-ignore lint/complexity/noForEach: <explanation>
    categoryLinks.forEach((categoryItemLink) => {
      categoryItemLink.setAttribute('tabindex', isActive ? '-1' : '0')
    })
    categoryItem.classList.toggle('wtq-active')
    categoryCollapse?.classList.toggle('wtq-active')
  })
})
