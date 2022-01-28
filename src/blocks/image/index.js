import css from './style.css'
import u from '../../utils.js'

const props = ['scale', 'filter', 'position', 'size']

const image = function (el, config) {
  const url = config.url
  const noPreload = config.noPreload
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
    img.src = url

    if (noPreload) {
      wrapper.appendChild(img)
      setTimeout(() => {
        resolve(that)
      }, 1)
    } else {
      img.onload = () => {
        wrapper.appendChild(img)
        resolve(that)
      }
      img.onerror = () => {
        resolve(that)
      }
    }
  })
}

export { image }
