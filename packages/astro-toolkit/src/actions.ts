export function action(callback: CallableFunction) {
  document.addEventListener('astro:after-swap', () => {
    callback()
  })
  callback()
}
