import u from '../utils.js'
import css from './css/container.css'
import { Scene } from './Scene.js'
import { Router } from '../router/Router.js'

const Container = function (rootElement, projectConfig) {
  this.config = projectConfig

  /*
      Let's check and fix the wrapper size
  */
  const size = getComputedStyle(rootElement)
  const w = +size.width.split('px')[0]
  const h = +size.height.split('px')[0]
  if (w <= 0) rootElement.style.width = '360px'
  if (h <= 0) rootElement.style.height = '200px'

  /*
    Let's notify the user about mandatory fields
  */
  if (!projectConfig.scenes) {
    return console.warn('No `scenes` array found')
  }
  if (projectConfig.scenes.length === 0) {
    console.warn('`scenes` is empty')
  }

  /*
    Activate the transition system if requested
  */
  if (projectConfig.transition) {
    rootElement.classList.add(projectConfig.transition)
  }

  /*
    Define the default scene color class
  */
  if (projectConfig.variant) {
    rootElement.classList.add('colorvar__' + projectConfig.variant)
  }

  /*
    Activate the theme if requested
  */
  if (projectConfig.theme) {
    rootElement.classList.add('theme__' + projectConfig.theme)
  }

  /*
    Time to init the container
  */
  rootElement.classList.add('presenta')

  const child = u.div(`<div class="a ${css.container}"></div>`)

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

export { Container }
