import css from './style.css'
import u from '../../utils.js'
import { Scene } from '../../core/Scene.js'
import { Router } from '../../router/Router.js'

const show = function (rootElement, projectConfig) {
  const child = u.div(`<div class="a ${css.show}"></div>`)

  const scenes = projectConfig.scenes
  var currentScene = new Scene(child, scenes[0], projectConfig)

  rootElement.appendChild(child)

  this.router = new Router(rootElement, projectConfig)

  this.router.on('nextIndex', evt => {
    if (currentScene) {
      currentScene.destroyAfter(1000)
    }

    currentScene = new Scene(child, scenes[evt.currentIndex], projectConfig)
  })

  this.router.on('prevIndex', evt => {
    if (currentScene) {
      currentScene.destroyAfter(1000)
    }
    currentScene = new Scene(child, scenes[evt.currentIndex], projectConfig)
  })

  this.router.on('stepChanged', evt => {
    currentScene.stepForward()
  })

  this.currentScene = () => {
    return currentScene
  }

  projectConfig.columns = 1 // override in case it's set
  u.fit(child, projectConfig, rootElement)

  const resizeObserver = new ResizeObserver(entries => {
    u.fit(child, projectConfig, rootElement)
  })
  resizeObserver.observe(child)
}

export { show }
