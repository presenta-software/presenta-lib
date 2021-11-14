import u from '../utils.js'
import css from './css/container.css'
import { Router } from './Router.js'
import { Scene } from './Scene.js'
import { MountScene } from './MountScene.js'

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

    var currentScene = null
    var currentSceneComing = null
    var prevSceneComing = null
    var nextSceneComing = null

    const swapScenes = (index, dir) => {
      const idx = index
      const dirWord = dir === 1 ? 'foreward' : 'backward'
      const oDirWord = dir === -1 ? 'foreward' : 'backward'

      if (idx < scenes.length) {
        // current
        const sceneConfig = scenes[idx]
        sceneConfig._presentatransdir = dirWord
        sceneConfig._router = router
        if (dir > 0 && nextSceneComing) {
          currentSceneComing = nextSceneComing
          Promise.all([prevSceneComing]).then(scene => {
            if (scene[0]) {
              scene[0].destroy()
            }
          })
        }
        if (dir < 0 && prevSceneComing) {
          currentSceneComing = prevSceneComing
          Promise.all([nextSceneComing]).then(scene => {
            if (scene[0]) {
              scene[0].destroy()
            }
          })
        }
        if (!currentSceneComing) currentSceneComing = new Scene(cont, sceneConfig, projectConfig, child)

        // next
        if (idx + 1 < scenes.length) {
          const nconf = scenes[idx + 1]
          nconf._presentatransdir = dirWord
          nconf._router = router
          nextSceneComing = new Scene(cont, nconf, projectConfig, child)
        }

        // prev
        if (idx - 1 >= 0) {
          const pconf = scenes[idx - 1]
          pconf._presentatransdir = oDirWord
          pconf._router = router
          prevSceneComing = new Scene(cont, pconf, projectConfig, child)
        }
      }

      Promise.all([currentSceneComing])
        .then(data => {
          if (currentScene) {
            currentScene.sceneConfig._presentatransdir = dirWord
            currentScene.destroyAfter(projectConfig._transitionDestroyDelay)
          }
          currentScene = data[0]
          currentScene.sceneConfig._presentatransdir = dirWord

          MountScene(currentScene)

          // if first run
          // check if it creates issue
          // added because Countainer wasn't under promise
          resolve(that)
        })
    }

    const router = new Router(child, projectConfig)

    router.on('nextIndex', evt => {
      swapScenes(evt.currentIndex, 1)
    })

    router.on('prevIndex', evt => {
      swapScenes(evt.currentIndex, -1)
    })

    router.on('stepChanged', evt => {
      currentScene.stepForward()
    })

    router.on('init', evt => {
      swapScenes(evt.currentIndex, 1)
    })

    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(entries => {
        u.fit(cont, projectConfig, rootElement)
      })
      resizeObserver.observe(child)
    }

    // u.fit(cont, projectConfig, rootElement)

    that.destroy = () => {
      currentScene.destroy()
      router.destroy()
    }

    that.router = router
    that.config = projectConfig
  })
}

export { Container }
