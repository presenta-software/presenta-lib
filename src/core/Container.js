
import u from '../utils.js'
import { containers } from '../containers/types.js'

const Container = function (rootElement, projectConfig) {
  this.el = u.select(rootElement)
  this.config = projectConfig

  /*
      Let's check and fix the wrapper size
  */
  const size = getComputedStyle(this.el)
  const w = +size.width.split('px')[0]
  const h = +size.height.split('px')[0]
  if (w <= 0) this.el.style.width = '360px'
  if (h <= 0) this.el.style.height = '200px'

  /*
    Let's notify the user about mandatory fields
  */
  if (!projectConfig.scenes) {
    return console.warn('No `scenes` array found')
  }
  if (projectConfig.scenes.length === 0) {
    return console.warn('`scenes` is empty')
  }

  /*
    Activate the transition system if requested
  */
  if (projectConfig.transition) {
    this.el.classList.add(projectConfig.transition)
  }

  /*
    Define the default scene color class
  */
  if (projectConfig.variant) {
    this.el.classList.add('colorvar__' + projectConfig.variant)
  }

  /*
    Activate the theme if requested
  */
  if (projectConfig.theme) {
    this.el.classList.add('theme__' + projectConfig.theme)
  }

  /*
    Decorate the incoming data structure
  */
  projectConfig.scenes.forEach((sceneConfig, i) => {
    sceneConfig.index = i
    sceneConfig.blocks.forEach((blockConfig, j) => {
      blockConfig.index = j
    })
  })

  /*
    Time to init the container
  */
  const contType = projectConfig.container || 'show'

  if (!containers[contType]) {
    console.warn(`container "${contType}" not found`)
  } else {
    this.el.classList.add('presenta')
    this.container = new containers[contType](this.el, projectConfig)
    this.uid = u.uid(projectConfig)
  }
}

export { Container }
