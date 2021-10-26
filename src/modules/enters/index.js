import css from './style.css'

const validTrans = ['fadeIn', 'zoomOut', 'zoomIn', 'slideUp', 'slideDown']

const enters = function (element, mod, config) {
  if (config._mode !== 'present') return

  const transition = mod.transition || validTrans[0]
  let delay = mod.delay ? parseInt(mod.delay) : 1000

  if (mod.stagger) {
    delay = delay + (200 * config._index)
  }

  if (config.contextType === 'block') {
    const el = config._el.querySelector('.blockContainer')
    el.classList.add(css[transition])

    setTimeout(() => {
      el.classList.add(css.entersItem)
    }, 16)

    setTimeout(() => {
      el.classList.remove(css[transition])
    }, delay)
  }
}

// enters.runBefore = true

export default enters
