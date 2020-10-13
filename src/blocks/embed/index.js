import css from './style.css'
import u from '../../utils.js'

const iframePrimaryDomain = str => {
  if (!str) return ''
  const reg = new RegExp('src="(.*)', 'gim')
  const url = reg.exec(str)
  const dom = url[1].match(/http(s?):\/\/([\w]+\.){1}([\w]+\.?)+/gim)
  return dom.length > 0 ? dom[0] : null
}

const embed = function (el, config, rootElement, projectConfig) {
  const previewMode = projectConfig.mode === 'preview'
  const presentMode = projectConfig.mode === 'present'

  let iframe = null
  if (config.url) {
    iframe = `<iframe src="${config.url}"></iframe>`
  }
  if (config.code) {
    iframe = config.code
  }

  const name = iframePrimaryDomain(iframe)

  const coverFrame = `<div class="cover ${css.loading}"><h1>Embed from <mark>${name}</mark></h1></div>`
  const blockPointer = config.blockPointer ? `<div class='${css.blockmouse}' />` : ''
  const posterFrame = config.poster ? `<div class="${css.poster}"><img src="${config.poster}" /></div>` : ''

  const child = u.div(`<div class="c ${css.embed}">
    <div class="${css.inner}">
        <div class="${css.frame}">${iframe}</div>
        ${coverFrame}
        ${posterFrame}
        ${blockPointer}
    </div>
  </div>`)
  el.appendChild(child)

  this.beforeDestroy = () => {
  }

  if (iframe && presentMode) {
    const frame = child.querySelector('iframe')
    frame.addEventListener('load', () => {
      child.querySelector('.' + css.loading).style.display = 'none'
      if (posterFrame) child.querySelector('.' + css.poster).style.display = 'none'
    })
  }
}

export { embed }
