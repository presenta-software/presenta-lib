import './globals.css'
import css from './style.css'
import u from '../../utils.js'

u.addProp([
  'pagenumTextAlign',
  'pagenumPadding',
  'pagenumInnerPadding',
  'pagenumFontSize',
  'pagenumFont',
  'pagenumBackColor',
  'pagenumColor',
  'pagenumBorder',
  'pagenumBorderRadius',
  'pagenumFlexAlign',
  'pagenumFlexJustify'
])
u.addGlob(['pagenumPosition'])

const pagenum = function (rootElement, router, ctrlConfig, projectConfig) {
  const child = u.div(`<div class="${css.pagenum}"></div>`)
  const inner = u.div(`<div class="${css.inner}"></div>`)
  const content = u.div(`<div class="${css.content}"></div>`)
  inner.appendChild(content)
  child.appendChild(inner)
  rootElement.appendChild(child)

  const template = typeof ctrlConfig === 'string' ? ctrlConfig : '%s / %S'
  const totalScenes = projectConfig.scenes.length

  const change = e => {
    const index = e.currentIndex + 1
    const str = template.replace(/%s/mg, index).replace(/%S/mg, totalScenes)
    content.innerHTML = str
  }

  router.on('indexChanged', e => {
    change(e)
  })
}

export { pagenum }
