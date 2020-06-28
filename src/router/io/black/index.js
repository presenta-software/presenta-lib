import css from './style.css'
import u from '../../../utils.js'

const black = function (rootElement, router, config) {
  let visible = false

  const child = u.div(`<div class="${css.black}"></div>`)
  rootElement.appendChild(child)

  const setKeyListener = e => {
    if (e.key === 'b') {
      visible = !visible
      child.style.opacity = visible ? 1 : 0
    }
  }

  rootElement.addEventListener('keyup', setKeyListener)
}

export { black }
