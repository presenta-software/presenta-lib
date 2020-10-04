import css from './style.css'
import './global.css'
import u from '../../../utils.js'

const pagenum = function (rootElement, router, ctrlConfig, projectConfig) {
  const child = u.div(`<div class="${css.pagenum}">
    <div class="${css.content}"></div>
  </div>`)
  rootElement.appendChild(child)

  const template = ctrlConfig.template || '%s / %S'
  const totalScenes = projectConfig.scenes.length
  const wrapper = child.querySelector('.' + css.content)

  const change = e => {
    const index = e.currentIndex + 1
    const str = template.replace(/%s/mg, index).replace(/%S/mg, totalScenes)
    wrapper.innerHTML = str
  }

  router.on('indexChanged', e => {
    change(e)
  })
}

export { pagenum }
