import css from './style.css'
import u from '../../utils.js'

const shape = function (el, config) {
  const rawp = u.rawProps('shape', ['color', 'path'], config)

  let t = config.shape || 'rect'
  if (config.path) t = 'path'
  const tEl = css[t]

  const child = u.div(`<div class="${css.shape}">
    <div style="${rawp}" class="${css.el} ${tEl}"></div>
  </div>`)
  el.appendChild(child)
}

export { shape }
