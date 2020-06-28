import './global.css'
import css from './style.css'
import u from '../../utils.js'

const iframePrimaryDomain = str => {
  if (!str) return ''
  const reg = new RegExp('src="(.*)', 'gim')
  const url = reg.exec(str)
  const dom = url[1].match(/http(s?):\/\/([\w]+\.){1}([\w]+\.?)+/gim)
  return dom.length > 0 ? dom[0] : null
}

const embed = function (_el, _config) {
  const el = u.select(_el)

  let iframe = null
  if (_config.url) {
    iframe = `<iframe src="${_config.url}"></iframe>`
  }
  if (_config.code) {
    iframe = _config.code
  }

  const name = iframePrimaryDomain(iframe)

  const child = u.div(`<div class="c ${css.embed}">
    <div class="${css.inner}">
        <div class="${css.frame}">${iframe}</div>
        <div class="cover ${css.loading}">
            <h1>Loading from <mark>${name}</mark></h1>
        </div>
        <div class="${css.blockmouse}"></div>
    </div>
  </div>`)

  this.beforeDestroy = () => {

  }

  el.appendChild(child)

  if (iframe) {
    const frame = child.querySelector('iframe')
    frame.addEventListener('load', () => {
      child.querySelector('.cover').style.display = 'none'
    })
  }
}

export { embed }
