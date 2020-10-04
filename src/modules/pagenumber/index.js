import './global.css'
import css from './style.css'
import u from '../../utils.js'

const pagenumber = function (sceneElement, modConfig, sceneConfig, projectConfig) {
  const front = sceneElement.querySelector('.frontContainer')
  const cPage = projectConfig.scenes.indexOf(sceneConfig) + 1
  const tPage = projectConfig.scenes.length

  let str = `${cPage} / ${tPage}`
  if (modConfig.template) {
    const template = modConfig.template
    str = template.replace(/%s/mg, cPage).replace(/%S/mg, tPage)
  }
  const child = u.div(`<div class="${css.pagenumber}">
    <div class="pagenumberContent">${str}</div> 
  </div>`)

  front.appendChild(child)
}

export { pagenumber }
