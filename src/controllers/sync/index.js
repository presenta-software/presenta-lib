import css from './style.css'
import u from '../../utils.js'

const sync = function (rootElement, router, ctrlConfig, projectConfig) {
  if (!window.BroadcastChannel) {
    console.log('[sync controller] disabled due browser incompatibility')
    return false
  }
  const bus = new BroadcastChannel('presenta.sync')

  const child = u.div(`<div class="${css.sync}"></div>`)
  rootElement.appendChild(child)

  bus.onmessage = e => {
    const ev = e.data
    const name = ev.name
    const props = ev.props

    if (name.indexOf('key') === 0) {
      const evt = { key: props.key }
      rootElement.parentNode.dispatchEvent(new KeyboardEvent(name, evt))
    }
    if (name.indexOf('mouse') === 0 || name.indexOf('click') === 0) {
      const evt = { x: props.x, y: props.y }
      const uid = props.uuid
      const el = uid ? rootElement.parentNode.querySelector('#' + uid) : rootElement.parentNode
      const sendEl = el || rootElement.parentNode
      sendEl.dispatchEvent(new MouseEvent(name, evt))
    }
  }

  const sendKey = (name, e) => {
    const ob = { key: e.key, type: e.type }
    if (e.isTrusted) bus.postMessage({ name, props: ob })
  }

  const sendMouse = (name, e) => {
    console.log(e.target, e.currentTarget)
    const target = e.target
    const uuid = target ? target.getAttribute('id') : null
    const ob = { uuid, type: e.type, x: e.clientX, y: e.clientY }
    if (e.isTrusted) bus.postMessage({ name, props: ob })
  }

  rootElement.parentNode.addEventListener('keydown', e => {
    sendKey('keydown', e)
  })

  rootElement.parentNode.addEventListener('keyup', e => {
    sendKey('keyup', e)
  })

  rootElement.parentNode.addEventListener('click', e => {
    sendMouse('click', e)
  })
}

export { sync }
