import css from './style.css'
import u from '../../utils.js'

const images = function (_el, _config) {
  const el = u.select(_el)

  const defsize = _config.size || 'cover'

  let imageschunk = ''
  if (_config.images) {
    _config.images.forEach(img => {
      const size = img.size || defsize
      const sizecmd = 'object-fit:' + size + ';'
      imageschunk += `<div class="${css.preimg}">
        <img style="${sizecmd}" src="${img.url}" />
      </div>`
    })
  }

  const child = u.div(`<div class="${css.images}">
    <div class="imagesContainer ${css.inner}">
        ${imageschunk}
    </div>
  </div>`)

  this.beforeDestroy = () => {
  }

  this.stepForward = (step) => {
  }

  el.appendChild(child)
}

export { images }
