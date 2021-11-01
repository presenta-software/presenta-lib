import css from './style.css'
import u from '../../utils.js'

const svg = function (el, config) {
  const svg = config._cache || config.code
  if (!svg) return console.log('[block svg]', 'The svg is not present')

  const aspect = config.aspect || null

  const child = u.div(`<div class="c ${css.svg}">
        <div class="${css.inner}">
            ${svg}
        </div>
    </div>`)
  el.appendChild(child)

  if (aspect) child.querySelector('svg').setAttribute('preserveAspectRatio', aspect)

  this.beforeDestroy = () => {
  }
}

svg.init = () => {
  if (u.io.addCache) u.io.addCache({ type: 'svg', field: 'url' })
  if (u.io.addBaseurl) u.io.addBaseurl({ type: 'svg', field: 'url' })
}

export { svg }
