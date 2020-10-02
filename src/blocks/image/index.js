import css from './style.css'
import u from '../../utils.js'

const image = function (el, config) {
  const size = config.size || 'cover'
  const url = config.url

  const sizecmd = 'object-fit:' + size + ';'
  const imageschunk = `<div class="${css.preimg}">
        <img style="${sizecmd}" src="${url}" />
      </div>`

  const child = u.div(`<div class="${css.image}">
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

export { image }
