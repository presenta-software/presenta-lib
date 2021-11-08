import css from './style.css'

const link = function (element, mod, config) {
  if (config._mode !== 'present') return

  if (config.contextType === 'block') {
    const el = config._el.querySelector('.blockContainer')
    el.classList.add(css.link)
  }
}

export default link
