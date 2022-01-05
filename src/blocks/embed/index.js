import css from './style.css'
import u from '../../utils.js'

const iframePrimaryDomain = str => {
  if (!str) return ''
  const reg = new RegExp('src="(.*)', 'gim')
  const url = reg.exec(str)
  const dom = url[1].match(/http(s?):\/\/([\w]+\.){1}([\w]+\.?)+/gim)
  return dom && dom.length > 0 ? dom[0] : null
}

const embed = function (el, config) {
  const presentMode = config._mode === 'present' || config._mode === 'print' || config.overrideMode

  let iframe = null
  if (config.url) {
    iframe = `<iframe src="${config.url}"></iframe>`
  }
  if (config.code) {
    iframe = config.code
  }

  if (!iframe) return false

  const that = this
  return new Promise((resolve, reject) => {
    const name = iframePrimaryDomain(iframe)
    const msg = name ? `Embed from <mark>${name}</mark>` : 'Embed resource'

    const coverFrame = `<div class="cover ${css.loading}"><h1>${msg}</h1></div>`
    const blockPointer = config.blockPointer ? `<div class='${css.blockmouse}' />` : ''
    const posterFrame = config.poster ? `<div class="${css.poster}"><img src="${config.poster}" /></div>` : ''

    const done = () => {
      child.querySelector('.' + css.loading).style.display = 'none'
      if (posterFrame) child.querySelector('.' + css.poster).style.display = 'none'
      resolve(that)
    }

    const waitForReady = config.waitReady
    if (presentMode && waitForReady) {
      console.log('waitReady')
      window.addEventListener('message', e => {
        console.log('message', e.data)
        if (e.data === 'presenta.iframe.ready') {
          done()
        }
      })
    }

    const child = u.div(`<div class="c ${css.embed}">
    <div class="${css.inner}">
        <div class="${css.frame}">${iframe}</div>
        ${coverFrame}
        ${posterFrame}
        ${blockPointer}
    </div>
  </div>`)
    el.appendChild(child)

    if (presentMode) {
      const frame = child.querySelector('iframe')

      if (waitForReady) {
      } else {
        console.log('waitLoad')
        frame.addEventListener('load', () => {
          console.log('load')
          done()
        })
      }
    } else {
      resolve(that)
    }
  })
}

export { embed }
