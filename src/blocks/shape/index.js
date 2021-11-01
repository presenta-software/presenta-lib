import css from './style.css'
import u from '../../utils.js'

const shape = function (el, config) {
  const rawp = u.rawProps('shape', ['color', 'border'], config)

  const t = config.shape || 'rect'
  const tEl = css[t]

  const child = u.div(`<div class="${css.shape}">
    <div style="${rawp}" class="${css.el} ${tEl}"></div>
  </div>`)
  el.appendChild(child)
}

export { shape }
