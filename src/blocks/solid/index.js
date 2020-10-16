import './globals.css'
import css from './style.css'
import u from '../../utils.js'

const solid = function (el, config) {
  if (config.color) el.style.setProperty('--solidColor', config.color)
  if (config.opacity) el.style.setProperty('--solidOpacity', config.opacity)
  if (config.blend) el.style.setProperty('--solidBlend', config.blend)

  var cClass = ''
  if (config.solidvar) {
    cClass = 'solidvar__' + config.solidvar
  }

  const child = u.div(`<div class="${css.solid} ${cClass}"></div>`)

  this.beforeDestroy = () => {
  }

  this.stepForward = (step) => {
  }

  el.appendChild(child)
}

export { solid }
