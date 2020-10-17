import './globals.css'
import css from './style.css'
import u from '../../utils.js'

/*
{
  type: 'solid',
  solidVar: 'a',
  solidColor:'red',
  solidOpacity: 1,
  solidBlend: 'multiply'
}
*/

u.addGlob('solidVar')
u.addProp(['solidColor', 'solidOpacity', 'solidColor'])

const solid = function (el, config) {
  const child = u.div(`<div class="${css.solid}"></div>`)

  this.beforeDestroy = () => {
  }

  this.stepForward = (step) => {
  }

  el.appendChild(child)
}

export { solid }
