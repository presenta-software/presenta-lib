import css from './style.css'
import u from '../../utils.js'

const svg = function (el, config) {
  const svg = config._cache || config.code
  if (!svg) return console.log('[block svg]', 'The svg is not present')

  const child = u.div(`<div class="c ${css.svg}">
        <div class="${css.inner}">
            ${svg}
        </div>
    </div>`)
  el.appendChild(child)

  this.beforeDestroy = () => {
  }

  this.stepForward = () => {
  }
}

svg.init = () => {
  u.addProp(['svgPadding'])
  u.io.addCache({ type: 'svg', field: 'url' })
}

export { svg }
