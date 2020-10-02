import './global.scss'
import css from './style.css'
import u from '../../utils.js'

const text = function (el, config) {
  const html = config.text || ''
  let fsize = config.scale || 1

  const child = u.div(`<div class="c ${css.text}">
    <div class="${css.inner}">
      <div class="pretext ${css.pretext}">
        <div class="${css.textbox}">
          <div class="textContent ${css.itext} ${css.fadein}">
            ${html}
          </div>
        </div>
      </div>
    </div>
  </div>`)

  this.beforeDestroy = () => {

  }

  this.stepForward = () => {
    console.log('stepForward')
  }

  el.appendChild(child)

  // if there are images, let's exploit the alt attribute if contains a number
  // as a scale multiplier
  let images = child.querySelectorAll('img')
  if (images) {
    images = [...images].forEach(img => {
      const a = img.getAttribute('alt')
      if (a) {
        const val = +a
        if (val > 0) img.style.height = 4 * val + 'em'
      }
    })
  }

  // this is the iterative scale routine
  const compute = () => {
    child.style.setProperty('--textsize', `${fsize}rem`)
    const mel = child.querySelector('.' + css.inner)
    const mbox = mel.getBoundingClientRect()
    const el = child.querySelector('.' + css.textbox)
    const bbox = el.getBoundingClientRect()

    if (parseInt(mbox.width) < parseInt(bbox.width) ||
                    parseInt(mbox.height) < parseInt(bbox.height)) {
      fsize -= 0.1
      return compute()
    } else {
      setTimeout(() => {
        child.querySelector('.' + css.inner).style.visibility = 'visible'
      })
    }
  }

  child.querySelector('.' + css.inner).style.visibility = 'hidden'
  setTimeout(compute)
}

export { text }
