import './global.css'
import css from './style.css'
import u from '../../utils.js'

const pagenumber = function (sceneElement, modConfig, sceneConfig, projectConfig) {
  const cPage = sceneConfig.index + 1
  const tPage = projectConfig.scenes.length

  let str = `${cPage} / ${tPage}`
  if (modConfig.template) {
    const template = modConfig.template
    str = template.replace(/%s/mg, cPage).replace(/%S/mg, tPage)
  }

  const child = u.div(`<div class="${css.pagenumber}">
    <div class="pagenumberContent">${str}</div> 
  </div>`)

  sceneElement.appendChild(child)
}

// pagenumber.BACK = true

export { pagenumber }
