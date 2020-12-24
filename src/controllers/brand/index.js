import './globals.css'
import css from './style.css'
import u from '../../utils.js'

u.addProp([
  'brandPadding',
  'brandInnerPadding',
  'brandBackColor',
  'brandColor',
  'brandBorder',
  'brandBorderRadius',
  'brandFlexAlign',
  'brandFlexJustify'
])
u.addGlob(['brandPosition'])

const brand = function (rootElement, router, ctrlConfig, projectConfig) {
  let timer = null
  const child = u.div(`<div class="${css.brand}"></div>`)
  const inner = u.div(`<div class="${css.inner}"></div>`)
  const content = u.div(`<div class="${css.content}"></div>`)
  inner.appendChild(content)
  child.appendChild(inner)
  rootElement.appendChild(child)

  content.innerHTML = ctrlConfig

  rootElement.parentNode.addEventListener('mousemove', e => {
    scheduleForHide()
  })
  const scheduleForHide = () => {
    clearTimeout(timer)
    child.classList.remove(css.hide)
    timer = setTimeout(() => {
      child.classList.add(css.hide)
    }, 3000)
  }
}

export { brand }
