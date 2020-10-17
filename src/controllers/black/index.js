import css from './style.css'
import u from '../../utils.js'

const black = function (rootElement, router, ctrlConfig, projectConfig) {
  let visible = false

  const child = u.div(`<div class="${css.black}"></div>`)
  rootElement.appendChild(child)

  const key = ctrlConfig.key || 'b'

  const setKeyListener = e => {
    if (e.key === key) {
      visible = !visible
      child.style.opacity = visible ? 1 : 0

      e.stopPropagation()
      e.preventDefault()
    }
  }

  rootElement.parentNode.addEventListener('keyup', setKeyListener)
}

export { black }
