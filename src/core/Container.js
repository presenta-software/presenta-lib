import u from '../utils.js'
import css from './css/container.css'
import { Router } from './Router.js'
import { Scene } from './Scene.js'

const Container = function (rootElement, projectConfig) {
  const that = this
  return new Promise((resolve, reject) => {
    rootElement.classList.add('presenta')

    const child = u.div(`<div class="${css.mainwrapper}"></div>`)
    child.setAttribute('tabindex', '0')
    rootElement.appendChild(child)

    const supercont = u.div(`<div class="b ${css.superContainer}"></div>`)
    const cont = u.div(`<div class="a ${css.container}"></div>`)
    child.appendChild(supercont)
    supercont.appendChild(cont)

    const scenes = projectConfig.scenes

    scenes.forEach((s, i) => (s.index = i))

    var currentScenes = []

    const swapScenes = (index, dir) => {
      const sceneProms = []

      const idx = index
      if (idx < scenes.length) {
        const sceneConfig = scenes[idx]
        sceneConfig._presentatransdir = dir
        sceneConfig._router = router
        sceneProms.push(new Scene(cont, sceneConfig, projectConfig, child))
      }

      Promise.all(sceneProms)
        .then(data => {
          currentScenes.forEach(s => {
            if (s.destroyAfter) {
              s.sceneConfig._presentatransdir = dir
              s.destroyAfter(projectConfig._transitionDestroyDelay)
            }
          })
          currentScenes = data

          // if first run
          // check if it creates issue
          // added because Countainer wasn't under promise
          resolve(that)
        })
    }

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

    // u.fit(cont, projectConfig, rootElement)

    that.destroy = () => {
      currentScenes.forEach(s => {
        if (s.destroy) s.destroy()
      })
      router.destroy()
    }

    that.updateBlock = (index, blockConfig) => {
      currentScenes[0].updateBlock(index, blockConfig)
    }

    that.router = router
    that.config = projectConfig
  })
}

export { Container }
