import './globals.css'
import css from './style.css'
import u from '../../utils.js'

// ['title', 'text', 'section', 'mention', 'suggest']

const text = function (el, config) {
  const that = this
  return new Promise((resolve, reject) => {
    const html = config.text || ''

    let sizefactor = 1
    if (config.responsive && config._portrait) {
      sizefactor = 2
    }

    let defsize = 1
    const varSize = {
      title: 2.5,
      text: 1,
      section: 2,
      mention: 1.5,
      suggest: 0.8
    }
    if (config.textVar) defsize = varSize[config.textVar]
    let fsize = config.scale || defsize * sizefactor

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
      child.style.setProperty('--textSize', `${fsize}rem`)
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
          resolve(that)
        })
      }
    }

    setTimeout(compute)
  })
}

text.init = () => {
  u.addGlob(['textVar', 'textStyle'])
  u.addProp(['textPadding', 'textAlign', 'textFlexAlign', 'textFlexJustify', 'textWidth'])

  if (u.io.addBaseurl) u.io.addBaseurl({ type: 'text', html: true })
  if (u.io.addMarkdown) u.io.addMarkdown({ type: 'text', field: 'text' })
}

export { text }
