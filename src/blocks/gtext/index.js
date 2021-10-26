import css from './style.css'
import u from '../../utils.js'

const props = [

  'background',
  'color',
  'accent',

  'padding',
  'lineHeight',
  'spaceChar',

  'borderTop',
  'borderLeft',
  'borderRight',
  'borderBottom',
  'borderRadius',

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

const gtext = function (el, config) {
  const that = this
  return new Promise((resolve, reject) => {
    const txt = config.content || ''

    if (!txt) return resolve(that)

    let rawp = u.rawProps('text', props, config)

    let fsize = config.scale
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

    const clamp = config.lineClamp
    let clampClass = ''
    if (clamp) {
      rawp += '--textClamp: ' + clamp
      clampClass = css.clamp
    }

    const child = u.div(`<div class="c ${css.stext} ${css.promise} ${inlineStyleClasses}">
    <div style="${rawp}" class="${css.inner}">
      <div class="pretext ${css.pretext}">
        <div class="${css.textbox}">
          <div class="textContent ${css.itext} ${clampClass}">
            <span>${txt}</span>
          </div>
        </div>
      </div>
    </div>
  </div>`)
    el.appendChild(child)

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

    if (config.font) {
      fetch(config.font).then(res => {
        setTimeout(compute)
      })
    } else {
      setTimeout(compute)
    }

    that.destroy = () => {
      resizeObserver.disconnect()
    }
  })
}

u.addBlockMainKey('gtext', 'content')

export { gtext }
