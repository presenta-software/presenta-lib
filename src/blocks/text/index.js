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

const getSize = v => {
  const res = { v: v, u: 'rem' }
  if (!v) return res
  const s = v + ''
  const ext = s.match(/rem|px/mig)
  if (ext) {
    res.u = ext[0]
    res.v = s.replace(ext[0], '')
  }

  if (!(Number(res.v) > 0)) {
    res.v = null
  } else {
    res.v = +res.v
  }
  return res
}

const text = function (el, config) {
  const that = this
  return new Promise((resolve, reject) => {
    const html = config.content || ''

    if (!html) return resolve(that)

    let rawp = u.rawProps('text', props, config)

    const size = getSize(config.scale)
    let fsize = size.v
    const funit = size.u

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

      const mbox = mel.getBoundingClientRect()
      const bbox = el.getBoundingClientRect()

      if (parseInt(mbox.width) < parseInt(bbox.width) ||
          parseInt(mbox.height) < parseInt(bbox.height)) {
        const vf = funit === 'px' ? 0.5 : 0.05
        fsize -= vf
        return setTimeout(compute)
      } else {
        setTimeout(() => {
          child.classList.remove(css.promise)
          resolve(that)
        })
      }
    }

    if (config.font) {
      document.fonts.ready.then(() => {
        setTimeout(compute)
      })
    } else {
      setTimeout(compute)
    }
    setTimeout(compute)
  })
}

export { text }
