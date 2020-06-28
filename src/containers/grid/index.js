import css from './style.css'
import u from '../../utils.js'
import { Scene } from '../../core/Scene.js'

const grid = function (rootElement, projectConfig) {
  const columns = projectConfig.columns || 1

  const child = u.div(`<div class="a ${css.grid} ${css['col' + columns]}"></div>`)

  const scenes = projectConfig.scenes
  scenes.forEach((b, i) => {
    const scene = new Scene(child, b, projectConfig)
  })

  rootElement.appendChild(child)

  u.fit(child, projectConfig, rootElement)
}

export { grid }
