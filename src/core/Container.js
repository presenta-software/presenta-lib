import u from '../utils.js'
import css from './css/container.css'
import { Router } from './Router.js'
import { Scene } from './Scene.js'

const Container = function (rootElement, projectConfig) {
  /*
    Init the wrapper
  */
  rootElement.classList.add('presenta')

  const child = u.div(`<div class="${css.mainwrapper}"></div>`)
  child.setAttribute('tabindex', '0')
  u.globs(child, projectConfig)
  u.props(child, projectConfig)
  rootElement.appendChild(child)

  /*
    Init the container
  */
  const supercont = u.div(`<div class="b ${css.superContainer}"></div>`)
  const cont = u.div(`<div class="a ${css.container}"></div>`)
  child.appendChild(supercont)
  supercont.appendChild(cont)

  const scenes = projectConfig.scenes
  var currentScene = null

  const swapScene = (index, dir) => {
    if (currentScene) {
      currentScene.sceneConfig._presentatransdir = dir
      currentScene.destroyAfter(projectConfig._transitionDestroyDelay)
    }
    if (scenes.length > 0) {
      const sceneConfig = scenes[index]
      sceneConfig._presentatransdir = dir
      sceneConfig._router = router
      new Scene(cont, sceneConfig, projectConfig, child).then(scene => {
        currentScene = scene
      })
    }
  }

  /*
    Init the router
  */
  const router = new Router(child, projectConfig)

  router.on('nextIndex', evt => {
    swapScene(evt.currentIndex, 'foreward')
  })

  router.on('prevIndex', evt => {
    swapScene(evt.currentIndex, 'backward')
  })

  router.on('stepChanged', evt => {
    currentScene.stepForward()
  })

  router.on('init', evt => {
    swapScene(evt.currentIndex, 'foreward')
  })

  if (window.ResizeObserver) {
    const resizeObserver = new ResizeObserver(entries => {
      u.fit(cont, projectConfig, rootElement)

      // const el = entries[0]
      // const w = el.contentRect.width
      // const h = el.contentRect.height
      // rootElement.style.setProperty('--presenta-w-mult', parseInt(w / 100))
      // rootElement.style.setProperty('--presenta-h-mult', parseInt(h / 100))
    })
    resizeObserver.observe(child)
  }

  u.fit(cont, projectConfig, rootElement)

  this.destroy = () => {
    currentScene.destroy()
  }

  this.router = router
  this.config = projectConfig
}

export { Container }
