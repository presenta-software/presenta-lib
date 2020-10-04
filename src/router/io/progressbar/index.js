import './global.css'
import css from './style.css'
import u from '../../../utils.js'

const progressbar = function (rootElement, router, ctrlConfig, projectConfig) {
  const child = u.div(`<div class="${css.progressbar}"></div>`)
  rootElement.appendChild(child)

  const totalScenes = projectConfig.scenes.length

  const change = e => {
    const index = e.currentIndex + 1
    const perc = index / totalScenes * 100
    child.style.width = perc + '%'
  }

  router.on('indexChanged', e => {
    change(e)
  })
}

export { progressbar }
