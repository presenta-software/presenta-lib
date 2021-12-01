import css from './style.css'
import u from '../../utils.js'

const props = [

  'background',
  'color',
  'accent',

  'padding',
  'interline',
  'spacing',
  'radius',

  'borderTop',
  'borderLeft',
  'borderRight',
  'borderBottom',

  'shadow',
  'blend',

  'align',
  'vertical',
  'horizontal'

]

const inlinestyles = [
  'marked',
  'uppercase',
  'underline'
]

const getUnit = v => {
  let res = 'rem'
  if (!v) return res
  const s = v + ''
  if (s.match(/rem|px/mig)) {
    res = ''
  }
  return res
}

const text = function (el, config) {
  const that = this
  return new Promise((resolve, reject) => {
    const html = config.content || ''

    if (!html) return resolve(that)

    let rawp = u.rawProps('text', props, config)

    let fsize = config.scale || 1
    const funit = getUnit(fsize)
    const autoscale = config.autoscale

    let inlineStyleClasses = ''
    inlinestyles.forEach(s => {
      if (config[s]) {
        inlineStyleClasses += css[s] + ' '
      }
    })

    if (config.font) {
      const name = u.addFontDep(config.font)
      rawp += ` --textFont:${name};`
    }

    const clamp = config.clamp
    let clampClass = ''
    if (clamp) {
      rawp += '--textClamp: ' + clamp
      clampClass = css.clamp
    }

    const child = u.div(`<div class="c ${css.text} ${css.promise} ${inlineStyleClasses}">
    <div style="${rawp}" class="${css.inner}">
      <div class="pretext ${css.pretext}">
        <div class="${css.textbox}">
          <div class="textContent ${css.itext} ${clampClass}">
            <span>${html}</span>
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

    // let isObserved = false
    // let isComputing = false
    // const resizeObserver = new ResizeObserver(() => {
    //   if (!isComputing) {
    //     resizeObserver.disconnect()
    //     compute()
    //   }
    // })

    // this is the iterative scale routine
    const compute = () => {
      child.style.setProperty('--textSize', `${fsize}${funit}`)

      const mel = child.querySelector('.' + css.inner)
      const el = child.querySelector('.' + css.textbox)

      if (!autoscale) {
        setTimeout(() => {
          child.classList.remove(css.promise)
          resolve(that)
        })
        return false
      }

      // isComputing = true
      // if (!isObserved) {
      //   resizeObserver.observe(el)
      //   isObserved = true
      // }

      const mbox = mel.getBoundingClientRect()
      const bbox = el.getBoundingClientRect()

      if (parseInt(mbox.width) < parseInt(bbox.width) ||
          parseInt(mbox.height) < parseInt(bbox.height)) {
        console.log('reducing........')
        fsize -= 0.05
        return setTimeout(compute)
      } else {
        setTimeout(() => {
          child.classList.remove(css.promise)
          resolve(that)
          // isComputing = false
        })
      }
    }

    if (config.font) {
      fetch(config.font).then(res => {
        setTimeout(compute)
      })
    } else {
      setTimeout(compute)
    }

    that.destroy = () => {
      // resizeObserver.disconnect()
    }
  })
}

export { text }
