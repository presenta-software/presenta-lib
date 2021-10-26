import css from './style.css'
import u from '../../utils.js'

const props = [
  'textAlign',
  'padding',
  'fontSize',
  'font',
  'backColor',
  'color',
  'flexAlign',
  'flexJustify'
]

const reveal = function (element, mod, config) {
  let isPreview = ''
  if (config._mode === 'preview') isPreview = css.preview

  const rawp = u.rawProps('reveal', props, mod)

  config._steps.push({ sandbox: 'reveal' })
  const text = mod.text ? mod.text : ''
  const exitEffect = mod.effect ? css[mod.effect] : css.exitSlideUp

  const child = u.div(`<div class="${css.reveal} ${isPreview}"></div>`)
  const inner = u.div(`<div class="${css.inner}" style="${rawp}"></div>`)
  const content = u.div(`<div class="${css.content}">${text}</div>`)
  inner.appendChild(content)
  child.appendChild(inner)

  element.querySelector('.sceneWrapper').appendChild(child)

  this.stepForward = step => {
    if (step.sandbox === 'reveal') {
      child.classList.add(exitEffect)
    }
  }
}

export default reveal
