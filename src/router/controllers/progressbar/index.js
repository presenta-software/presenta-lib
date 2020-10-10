import css from './style.css'
import u from '../../../utils.js'

const progressbar = function (rootElement, router, ctrlConfig, projectConfig) {
  const child = u.div(`<div class="${css.progressbar}"></div>`)
  const bar = u.div(`<div class="${css.bar}"></div>`)
  child.appendChild(bar)
  rootElement.appendChild(child)

  const totalScenes = projectConfig.scenes.length

  const change = e => {
    const index = e.currentIndex + 1
    const perc = index / totalScenes * 100
    bar.style.width = perc + '%'
  }

  router.on('indexChanged', e => {
    change(e)
  })
}

export { progressbar }
