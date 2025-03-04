import { action } from 'astro-toolkit/actions'

export { action }


// resumability(document.getElementById('search'), "click")

// function resumability(ref: HTMLElement | null, event: string) {
//   ref.addEventListener(event, () => import("./search-logic"))
// }

export function resumability(callback: CallableFunction, ref: HTMLElement, event: string) {
  ref.addEventListener(event, () => {
    callback()
  })
  callback()
}

