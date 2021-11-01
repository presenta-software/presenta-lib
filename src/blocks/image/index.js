import css from './style.css'
import u from '../../utils.js'

const props = ['scale', 'filter', 'position', 'size']

const image = function (el, config) {
  const url = config.url
  if (!url) return false

  const that = this
  return new Promise((resolve, reject) => {
    const rawp = u.rawProps('image', props, config)

    const imageschunk = `<div class="presentablock__image ${css.preimg}"></div>`

    const child = u.div(`<div class="${css.image}">
    <div style="${rawp}" class="imagesContainer ${css.inner}">
        ${imageschunk}
    </div>
  </div>`)

    el.appendChild(child)

    const wrapper = el.querySelector('.' + css.preimg)

    const img = new Image()
    img.onload = () => {
      wrapper.appendChild(img)
      resolve(that)
    }
    img.onerror = () => {
      resolve(that)
    }
    img.src = url
  })
}

// image.init = () => {
//   if (u.io.addPreload) u.io.addPreload({ type: 'image', field: 'url', as: 'image' })
//   if (u.io.addBaseurl) u.io.addBaseurl({ type: 'image', field: 'url' })
// }

export { image }
