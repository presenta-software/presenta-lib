import css from './style.css'
import u from '../../utils.js'

const props = [
  'textAlign',
  'padding',
  'innerPadding',
  'fontSize',
  'font',
  'backColor',
  'color',
  'border',
  'borderRadius',
  'flexAlign',
  'flexJustify'
]

const pagenum = function (element, mod, config) {
  const rawp = u.rawProps('pagenum', props, mod)

  const child = u.div(`<div class="${css.pagenum}"></div>`)
  const inner = u.div(`<div class="${css.inner}" style="${rawp}"></div>`)
  const content = u.div(`<div class="${css.content}"></div>`)
  inner.appendChild(content)
  child.appendChild(inner)

  element.querySelector('.sceneWrapper').appendChild(child)

  const template = mod.template ? mod.template : '%s / %S'

  const router = config._router
  const curr = router.currentIndex()
  const tot = router.totalScenes()

  const index = curr + 1
  const str = template.replace(/%s/mg, index).replace(/%S/mg, tot)
  content.innerHTML = str
}

export default pagenum
