import css from './style.css'
import u from '../../utils.js'

const svg = function (el, config) {
  const svg = config.code
  if (!svg) return console.log('[block svg]', 'The svg is not present')

  const aspect = config.aspect || null
  const query = config.query || null

  const child = u.div(`<div class="c ${css.svg}">
        <div class="${css.inner}">
            ${svg}
        </div>
    </div>`)
  el.appendChild(child)

  if (aspect) child.querySelector('svg').setAttribute('preserveAspectRatio', aspect)
  if (query) {
    const s = child.querySelector('svg')
    // #rect1:width:100,#rect2:height:20,circle:fill:#ff0000
    const els = query.split(',')
    els.forEach(el => {
      const subparts = el.split(':')
      const sel = subparts[0]
      const atr = subparts[1]
      const val = subparts[2]

      const itm = [...s.querySelectorAll(sel)]
      itm.forEach(it => {
        it.setAttribute(atr, val)
      })
    })
  }
}

export { svg }
