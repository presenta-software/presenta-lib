import css from './css/splash.css'
import u from '../utils.js'
import loader from './icons/loader.svg'

const Splash = function (rootElement, projectConfig) {
  /*
      Let's check and fix the wrapper size
  */
  const size = getComputedStyle(rootElement)
  let w = +size.width.split('px')[0]
  let h = +size.height.split('px')[0]

  if (w < 50) {
    w = 360
    rootElement.style.width = `${w}px`
  }
  if (h < 50) {
    h = 200
    if (projectConfig) h = w / projectConfig.aspect
    rootElement.style.height = `${h}px`
  }

  const label = projectConfig.loading || ''

  const child = u.div(`<div class="${css.splash}">
    <div class="${css.spinner}">${loader}</div>
    ${label}
  </div>`)
  rootElement.appendChild(child)
  u.globs(child, projectConfig)

  this.destroy = () => {
    rootElement.removeChild(child)
  }
}

export { Splash }
