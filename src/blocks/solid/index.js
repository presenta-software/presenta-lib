import css from './style.css'
import u from '../../utils.js'

const solid = function (el, config) {
  const style = `style="background:${config.color};"`

  const child = u.div(`<div ${style} class="${css.solid}"></div>`)

  this.beforeDestroy = () => {
  }

  this.stepForward = (step) => {
  }

  el.appendChild(child)
}

export { solid }
