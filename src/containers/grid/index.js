import css from './style.css'
import u from '../../utils.js'
import { Scene } from '../../core/Scene.js'

const grid = function (rootElement, projectConfig) {
  const columns = projectConfig.columns || 1

  const child = u.div(`<div class="a ${css.grid} ${css['col' + columns]}"></div>`)

  const cscenes = projectConfig.scenes
  cscenes.forEach((b, i) => {
    const scene = new Scene(b, projectConfig)
    child.appendChild(scene.el)
  })

  rootElement.appendChild(child)

  u.fit(child, projectConfig, rootElement)

  this.updateAt = (index, confscene) => {
    const newscene = new Scene(confscene, projectConfig)
    const oldEl = child.children[index]
    child.replaceChild(newscene.el, oldEl)
  }

  this.addAt = (index, confscene) => {
    const scene = new Scene(confscene, projectConfig)
    child.insertBefore(scene.el, child.children[index])
  }

  this.removeAt = (index) => {
    const remEl = child.children[index]
    child.removeChild(remEl)
  }
}

export { grid }
