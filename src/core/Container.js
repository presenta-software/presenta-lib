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

  let perPage = projectConfig.perPage ? parseInt(projectConfig.perPage) : 1
  if (perPage < 1) perPage = 1

  /*
    Init the container
  */
  const supercont = u.div(`<div class="b ${css.superContainer}"></div>`)
  const cont = u.div(`<div class="a ${css.container}"></div>`)
  child.appendChild(supercont)
  supercont.appendChild(cont)

  const scenes = projectConfig.scenes
  var currentScenes = []

  const swapScenes = (index, dir) => {
    const sceneProms = []

    for (let i = 0; i < perPage; ++i) {
      const idx = index + i
      if (idx < scenes.length) {
        const sceneConfig = scenes[idx]
        sceneConfig._presentatransdir = dir
        sceneConfig._router = router
        sceneProms.push(new Scene(cont, sceneConfig, projectConfig, child))
      }
    }

    Promise.all(sceneProms)
      .then(data => {
        currentScenes.forEach(s => {
          s.sceneConfig._presentatransdir = dir
          s.destroyAfter(projectConfig._transitionDestroyDelay)
        })
        if (perPage > 1) {
          data.forEach((s, i) => {
            const div = s.sceneConfig._el
            const w = 100 / perPage + '%'
            const l = 100 / perPage * i + '%'
            div.style.width = w
            div.style.left = l
          })
        }
        currentScenes = data
      })
  }

  /*
    Init the router
  */
  const router = new Router(child, projectConfig)

  router.on('nextIndex', evt => {
    swapScenes(evt.currentIndex, 'foreward')
  })

  router.on('prevIndex', evt => {
    swapScenes(evt.currentIndex, 'backward')
  })

  router.on('stepChanged', evt => {
    currentScenes.forEach(s => {
      s.stepForward()
    })
  })

  router.on('init', evt => {
    swapScenes(evt.currentIndex, 'foreward')
  })

  if (window.ResizeObserver) {
    const resizeObserver = new ResizeObserver(entries => {
      u.fit(cont, projectConfig, rootElement)
    })
    resizeObserver.observe(child)
  }

  u.fit(cont, projectConfig, rootElement)

  this.destroy = () => {
    currentScenes.forEach(s => {
      s.destroy()
    })
  }

  this.router = router
  this.config = projectConfig
}

export { Container }
