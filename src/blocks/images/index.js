import css from './style.css'
import u from '../../utils.js'

const images = function (_el, _config) {
  const el = u.select(_el)

  let imageschunk = ''
  _config.images.forEach(img => {
    imageschunk += `<div class="${css.preimg}"><img src="${img.url}" /></div>`
  })

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
