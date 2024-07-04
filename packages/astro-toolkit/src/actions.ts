export function action(callback) {
  document.addEventListener("astro:after-swap", () => {
    callback()
  })
  callback()
}