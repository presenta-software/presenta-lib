import css from './style.css'
import u from '../../utils.js'

const props = ['height', 'bottom', 'color']

const progressbar = function (element, router, config, projectConfig) {
  if (projectConfig.mode === 'preview') return

  const rawp = u.rawProps('progressbar', props, config)

  const child = u.div(`<div class="${css.progressbar}" style="${rawp}"></div>`)
  const bar = u.div(`<div class="${css.bar}"></div>`)
  child.appendChild(bar)
  element.appendChild(child)

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
