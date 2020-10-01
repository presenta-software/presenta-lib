import css from './style.css'
import u from '../../utils.js'
import { Scene } from '../../core/Scene.js'
import { Router } from '../../router/Router.js'

const show = function (rootElement, projectConfig) {
  const child = u.div(`<div class="a ${css.show}"></div>`)

  const scenes = projectConfig.scenes
  var currentScene = new Scene(scenes[0], projectConfig, rootElement)
  child.appendChild(currentScene.el)

  rootElement.appendChild(child)

  const swapScene = (index, dir) => {
    if (currentScene) {
      currentScene.sceneConfig._presentatransdir = dir
      currentScene.destroyAfter(projectConfig._transitionDestroyDelay)
    }
    const sceneConfig = scenes[index]
    sceneConfig._presentatransdir = dir
    currentScene = new Scene(sceneConfig, projectConfig, rootElement)
    child.appendChild(currentScene.el)
  }

  this.router = new Router(rootElement, projectConfig)

  this.router.on('nextIndex', evt => {
    swapScene(evt.currentIndex, 'foreward')
  })

  this.router.on('prevIndex', evt => {
    swapScene(evt.currentIndex, 'backward')
  })

  this.router.on('stepChanged', evt => {
    currentScene.stepForward()
  })

  this.currentScene = () => {
    return currentScene
  }

  u.fit(child, projectConfig, rootElement)

  const resizeObserver = new ResizeObserver(entries => {
    u.fit(child, projectConfig, rootElement)
  })
  resizeObserver.observe(child)
}

export { show }
