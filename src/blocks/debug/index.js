import css from './style.css'
import u from '../../utils.js'

const debug = function (_el, _config) {
  const el = u.select(_el)

  const child = u.div(`<div class="${css.debug}">
    <h1>DEBUG <div class="step">0</div></h1> 
  </div>`)

  this.beforeDestroy = () => {

  }

  this.stepForward = (step) => {
    child.querySelector('.step').innerHTML = step
  }

  el.appendChild(child)

  // setTimeout(() => {
  //   el.dispatchEvent(new CustomEvent('testevent', { bubbles: true, detail: { some: 'data' } }))
  // }, 1000)
}

export { debug }
