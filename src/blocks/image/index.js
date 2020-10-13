import css from './style.css'
import u from '../../utils.js'

const image = function (el, config) {
  const url = config.url

  const imageschunk = `<div class="presentablock__image ${css.preimg}">
        <img src="${url}" />
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
