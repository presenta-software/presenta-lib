import css from './style.css'
import u from '../../utils.js'

const solid = function (el, config) {
  let style = `background-color:${config.color};`
  if (config.opacity) style += `opacity:${config.opacity};`

  const stylecmd = `style="${style}"`

  const child = u.div(`<div ${stylecmd} class="${css.solid}"></div>`)

  this.beforeDestroy = () => {
  }

  this.stepForward = (step) => {
  }

  el.appendChild(child)
}

export { solid }
