import './globals.css'
import css from './style.css'
import u from '../../utils.js'

u.addProp([
  'minitoolsPadding',
  'minitoolsInnerPadding',
  'minitoolsBackColor',
  'minitoolsColor',
  'minitoolsBorder',
  'minitoolsBorderRadius',
  'minitoolsFlexAlign',
  'minitoolsFlexJustify'
])
u.addGlob(['minitoolsPosition'])

const minitools = function (rootElement, router, ctrlConfig, projectConfig) {
  const child = u.div(`<div class="${css.minitools}"></div>`)
  const inner = u.div(`<div class="${css.inner}"></div>`)
  const content = u.div(`<div class="${css.content}"></div>`)
  inner.appendChild(content)
  child.appendChild(inner)
  rootElement.appendChild(child)

  /*
  fullscreen
  socials
  web
  toggle navs?
  */
}

export { minitools }
