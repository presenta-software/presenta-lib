import css from './style.css'
import u from '../../utils.js'

const video = function (_el, _config) {
  const el = u.select(_el)

  const defsize = _config.size || 'cover'
  const sizecmd = 'object-fit:' + defsize + ';'

  const poster = _config.poster ? `poster=${_config.poster}` : ''
  const loop = _config.loop ? 'loop' : ''
  const autoplay = _config.autoplay ? 'autoplay' : ''
  const src = _config.src ? `src=${_config.src}` : ''

  const child = u.div(`<div class="${css.video}">
    <video style="${sizecmd}" ${poster} ${src} ${loop} ${autoplay}></video>
  </div>`)

  this.beforeDestroy = () => {
  }

  this.stepForward = (step) => {
  }

  el.appendChild(child)
}

export { video }
