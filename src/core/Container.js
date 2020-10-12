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
  let w = +size.width.split('px')[0]
  let h = +size.height.split('px')[0]

  if (w <= 0) {
    w = 360
    rootElement.style.width = `${w}px`
  }
  if (h <= 0) {
    h = 200
    if (projectConfig.aspect) h = w / projectConfig.aspect
    rootElement.style.height = `${h}px`
  }

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
    Global defaults
  */
  const globprop = ['transition', 'colorvar', 'scheme', 'fontkit', 'theme']
  globprop.forEach(p => {
    if (projectConfig[p]) {
      const prp = projectConfig[p].substr(1)
      rootElement.classList.add(`${p}__${prp}`)
    }
  })

  /*
    Init the container
  */
  rootElement.classList.add('presenta')

  const child = u.div(`<div class="a ${css.container}"></div>`)

  const scenes = projectConfig.scenes
  var currentScene = null

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

  this.router.on('init', evt => {
    swapScene(evt.currentIndex, 'foreward')
  })

  if (window.ResizeObserver) {
    const resizeObserver = new ResizeObserver(entries => {
      u.fit(child, projectConfig, rootElement)
    })
    resizeObserver.observe(child)
  }

  u.fit(child, projectConfig, rootElement)

  this.currentScene = () => {
    return currentScene
  }

  this.destroy = () => {
    currentScene.destroy()
  }
}

export { Container }
