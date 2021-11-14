import css from './css/scene.css'
import { modules } from '../modules/types.js'
import { Transition } from './Transition.js'
import { MountBlock } from './MountBlock.js'

const MountScene = (scene) => {
  const sceneConfig = scene.sceneConfig

  const child = sceneConfig._el
  const projectConfig = sceneConfig._projectConfig

  const initModules = (runBefore) => {
    if (sceneConfig.modules) {
      for (const k in sceneConfig.modules) {
        const modConfig = sceneConfig.modules[k]
        const Mod = modules[k]
        if (!Mod) console.log(`Module "${k}" not found. Maybe you forgot to include it.`)
        if (Mod) {
          if (modConfig) {
            if (!Mod.runBefore && !runBefore) {
              // eslint-disable-next-line
              new Mod(child, modConfig, sceneConfig)
            }
          }
        }
      }
    }
  }

  const startTransition = () => {
    child.classList.add(css.visible)
    const wrap = child.querySelector('.sceneObject')
    Transition(wrap)
      .start()

    setTimeout(() => {
      Transition(wrap)
        .swap()
    }, projectConfig._transitionDestroyDelay)
  }

  initModules(false)

  sceneConfig.blocks.forEach(b => MountBlock(b))

  startTransition()

  child.classList.add('presentaSceneMounted')
}

export { MountScene }
