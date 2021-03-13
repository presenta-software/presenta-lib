import css from './css/scene.css'
import u from '../utils.js'
import { Block } from './Block.js'
import { modules } from '../modules/types.js'
import { Transition } from './Transition.js'

const Scene = function (cont, sceneConfig, projectConfig, rootElement) {
  const that = this
  return new Promise((resolve, reject) => {
    let blockInstances = []

    let modInstances = []
    const modPromises = []

    /*
    Let's notify the user about missing fields
    */
    if (!sceneConfig.blocks) {
      return console.warn('No `blocks` array found in scene ' + sceneConfig.index)
    }
    if (sceneConfig.blocks.length === 0) {
      console.warn('`blocks` is empty in scene ' + sceneConfig.index)
    }

    /*
    Set the module config from project settings
  */
    if (projectConfig.modules) {
      for (const k in projectConfig.modules) {
        if (!sceneConfig.hasOwnProperty('modules')) sceneConfig.modules = {}
        if (!sceneConfig.modules.hasOwnProperty(k)) {
          sceneConfig.modules[k] = projectConfig.modules[k]
        }
      }
    }

    /*
    Check if transition has been defined at project level or scene level
  */
    const hasTransition = sceneConfig.transition || projectConfig.transition

    /*
    Create the wrapper template
  */
    let currentStep = 0
    sceneConfig._steps = []
    const steps = sceneConfig._steps

    const noResize = sceneConfig.noResize || projectConfig.noResize ? css.noResize : ''

    const child = u.div(`<div 
      class="s ${css.sceneContainer}">
      <div class="sceneObject ${css.scene} ${noResize}">
        <div class="${css.wrapper}">
            <div class="${css.content}">
                <div class="layout blocksContainer ${css.viewport}"></div>
                <div class="moduleFrontWrapper ${css.fcontainer}"></div>
            </div>
        </div>
      </div>
  </div>`)
    cont.appendChild(child)

    u.globs(child, sceneConfig)
    u.props(child, sceneConfig)
    sceneConfig._el = child
    sceneConfig._rootElement = rootElement
    sceneConfig._mode = projectConfig.mode

    /**
    Init blocks if any
    */
    const cblocks = sceneConfig.blocks
    const blockPromises = []
    cblocks.forEach((blockConfig, i) => {
      blockConfig._index = i
      blockConfig._portrait = projectConfig._orientation === 'portrait'
      blockConfig._mode = projectConfig.mode
      blockConfig._rootElement = rootElement
      blockConfig._sceneConfig = sceneConfig

      const blocksContainer = child.querySelector('.blocksContainer')
      blockPromises.push(new Block(blocksContainer, blockConfig))
    })

    const initModules = () => {
      if (sceneConfig.modules) {
        for (const k in sceneConfig.modules) {
          const modConfig = sceneConfig.modules[k]
          const Mod = modules[k]
          if (!Mod) console.log(`Module "${k}" not found. Maybe you forgot to include it.`)
          if (Mod) {
            if (modConfig) {
              const mod = new Mod(child, modConfig, sceneConfig)
              modPromises.push(mod)
            }
          }
        }
      }
    }

    const initTransition = () => {
      if (hasTransition) {
        const wrap = child.querySelector('.sceneObject')
        const dir = sceneConfig._presentatransdir === 'backward' ? 'to-left' : 'to-right'
        Transition(wrap)
          .init(dir)
      }
    }

    const startTransition = () => {
      if (hasTransition) {
        const wrap = child.querySelector('.sceneObject')
        Transition(wrap)
          .start()

        setTimeout(() => {
          Transition(wrap)
            .swap()
        }, projectConfig._transitionDestroyDelay)
      }
    }

    /*
    Public method called by the container to init the destroy phase
    */
    that.destroyAfter = _t => {
      if (hasTransition) {
        const wrap = child.querySelector('.sceneObject')
        const odir = sceneConfig._presentatransdir === 'backward' ? 'to-right' : 'to-left'
        const ndir = sceneConfig._presentatransdir === 'backward' ? 'to-left' : 'to-right'
        Transition(wrap)
          .clear(odir)
          .end(ndir)
      }

      const t = _t || 0
      modInstances.forEach(mod => { if (mod.beforeDestroy) mod.beforeDestroy() })
      blockInstances.forEach(block => { if (block.beforeDestroy) block.beforeDestroy() })

      setTimeout(() => {
        that.destroy()
        child.parentNode.removeChild(child)
      }, t)
    }

    /*
    Public method called by the container move forward the step progress
   */
    that.stepForward = () => {
      if (currentStep < steps.length) {
        const stepData = steps[currentStep]
        modInstances.forEach(mod => { if (mod.stepForward) mod.stepForward(stepData, currentStep) })
        blockInstances.forEach(block => { if (block.stepForward) block.stepForward(stepData, currentStep) })
        currentStep++
      }
    }

    /*
    Immediate destroy for garbage collection
   */
    that.destroy = () => {
      modInstances.forEach(mod => { if (mod.destroy) mod.destroy() })
      blockInstances.forEach(block => { if (block.destroy) block.destroy() })
    }

    that.sceneConfig = sceneConfig
    initTransition()
    // initModules()

    Promise.all(blockPromises).then(data => {
      blockInstances = data

      initModules()

      Promise.all(modPromises).then(data => {
        modInstances = data
        startTransition()
        resolve(that)
      })
    })
  })
}

export { Scene }
