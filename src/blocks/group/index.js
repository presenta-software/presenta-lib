import { Block } from '../../core/Block.js'
import css from './style.css'
import u from '../../utils.js'

const group = function (el, config, sceneConfig, rootElement, projectConfig) {
  const blocks = config.blocks

  const child = u.div(`<div class="${css.group}">
    <div class="layout"></div>
  </div>`)

  // u.globs(child, config)
  // u.props(child, config)

  const cont = child.querySelector('.layout')

  blocks.forEach((blockConfig, i) => {
    blockConfig.index = i
    new Block(cont, blockConfig, sceneConfig, rootElement, projectConfig)
  })

  el.appendChild(child)
}

group.init = () => {
  // u.addGlob(['layout'])
}

export { group }
