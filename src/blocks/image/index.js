import css from './style.css'
import u from '../../utils.js'

const image = function (el, config) {
  const url = config.url
  const step = config.step ? 'step' : ''

  const imageschunk = `<div class="presentablock__image ${css.preimg}">
        <img src="${url}" />
      </div>`

  const child = u.div(`<div class="${css.image} ${step}">
    <div class="imagesContainer ${css.inner}">
        ${imageschunk}
    </div>
  </div>`)

  this.beforeDestroy = () => {
  }

  el.appendChild(child)
}

image.init = () => {
  u.addProp(['imagePadding', 'imageBorder', 'imageShadow', 'imageSize', 'imagePosition'])

  if (u.io.addPreload) u.io.addPreload({ type: 'image', field: 'url', as: 'image' })
  if (u.io.addBaseurl) u.io.addBaseurl({ type: 'image', field: 'url' })
}

export { image }
