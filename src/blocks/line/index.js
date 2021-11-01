import css from './style.css'
import u from '../../utils.js'

const line = function (el, config) {
  const rawp = u.rawProps('line', ['color', 'tickness'], config)

  const dir = config.direction || 'horizontal'
  const dircls = css[dir]

  const child = u.div(`<div class="${css.line} ${dircls}">
    <div style="${rawp}" class="${css.el}"></div>
  </div>`)
  el.appendChild(child)
}

export { line }
