import css from './style.css'
import u from '../../utils.js'

const sender = function (rootElement, router, ctrlConfig, projectConfig) {
  if (!window.BroadcastChannel) {
    console.log('sender controller is disabled because browser incompatibility')
    return false
  }
  const bus = new BroadcastChannel('presenta.sender')

  const child = u.div(`<div class="${css.sender}"></div>`)
  rootElement.appendChild(child)

  bus.onmessage = e => {
    const ev = e.data
    const name = ev.name
    const props = ev.props
    router.dispatch(name, props)
  }

  const sendKey = (name, e) => {
    const ob = { key: e.key }
    router.dispatch(name, ob)
    bus.postMessage({ name, props: ob })
  }

  const sendMouse = (name, e) => {
    const ob = { x: e.clientX, y: e.clientY }
    router.dispatch(name, ob)
    bus.postMessage({ name, props: ob })
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

export { sender }
