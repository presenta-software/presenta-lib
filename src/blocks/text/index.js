import css from './style.css'
import u from '../../utils.js'

const props = [
  'padding',
  'lineHeight',
  'align',
  'vertical',
  'horizontal'
]

const text = function (el, config) {
  const that = this
  return new Promise((resolve, reject) => {
    const html = config.content || ''

    if (!html) return resolve(that)

    const rawp = u.rawProps('text', props, config)

    let fsize = config.scale
    const autoscale = config.autoscale

    let ccss = ''
    const uid = u.uid(config)
    if (config.css) {
      const rcss = config.css.replace(/\./ig, '.' + uid + ' .')
      ccss = `<style>${rcss}</style>`
    }

    const child = u.div(`<div class="c ${uid} ${css.text} ${css.promise}">
    ${ccss}
    <div style="${rawp}" class="${css.inner}">
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
    // let images = child.querySelectorAll('img')
    // if (images) {
    //   images = [...images].forEach(img => {
    //     const a = img.getAttribute('alt')
    //     if (a) {
    //       const val = +a
    //       if (val > 0) img.style.height = 4 * val + 'em'
    //     }
    //   })
    // }

    let isObserved = false
    let isComputing = false
    const resizeObserver = new ResizeObserver(() => {
      if (!isComputing) {
        resizeObserver.disconnect()
        compute()
      }
    })

    // this is the iterative scale routine
    const compute = () => {
      child.style.setProperty('--textSize', `${fsize}rem`)

      const mel = child.querySelector('.' + css.inner)
      const el = child.querySelector('.' + css.textbox)

      if (!autoscale) {
        setTimeout(() => {
          child.classList.remove(css.promise)
          resolve(that)
        })
        return false
      }

      isComputing = true
      if (!isObserved) {
        resizeObserver.observe(el)
        isObserved = true
      }

      const mbox = mel.getBoundingClientRect()
      const bbox = el.getBoundingClientRect()

      if (parseInt(mbox.width) < parseInt(bbox.width) ||
          parseInt(mbox.height) < parseInt(bbox.height)) {
        fsize -= 0.05
        return compute()
      } else {
        setTimeout(() => {
          child.classList.remove(css.promise)
          resolve(that)
          isComputing = false
        })
      }
    }

    setTimeout(compute)

    that.destroy = () => {
      resizeObserver.disconnect()
    }
  })
}

text.init = () => {
  // u.addGlob(['textVar', 'textStyle'])
  // u.addProp(['textPadding', 'textAlign', 'textFlexAlign', 'textFlexJustify', 'textWidth'])

  // if (u.io.addBaseurl) u.io.addBaseurl({ type: 'text', html: true })
  // if (u.io.addMarkdown) u.io.addMarkdown({ type: 'text', field: 'text' })
}

u.addBlockMainKey('text', 'content')

export { text }
