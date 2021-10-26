import css from './style.css'
import u from '../../utils.js'

function fabricbridge (element, modConfig, config) {
  if (config.contextType === 'block') return

  const viewport = element.querySelector('.blocksContainer')

  const limits = u.div(`<div class="${css.viewportLimit}"></div>`)
  viewport.parentNode.appendChild(limits)

  const upd = e => {
    const block = config.blocks[e.index]
    const el = block._el

    for (var k in e.coords) {
      const v = e.coords[k]
      el.style.setProperty('--' + k, v)
    }

    block.modules.coords = e.coords
  }

  const router = config._router
  router.on('live:block:update', upd)

  const begin = () => {
    viewport.style.overflow = 'inherit'
    limits.style.visibility = 'visible'
  }
  router.on('live:block:begin', begin)

  const end = () => {
    viewport.style.overflow = 'hidden'
    limits.style.visibility = 'hidden'
  }
  router.on('live:block:end', end)

  this.destroy = () => {
    router.off('live:block:update', upd)
    router.off('live:block:begin', begin)
    router.off('live:block:end', end)
  }
}

export default fabricbridge
