import css from './css/scene.css'
import u from '../utils.js'
import { Block } from './Block.js'
import { modules } from '../modules/types.js'
import { Transition } from './Transition.js'

const Scene = function (cont, sceneConfig, projectConfig, rootElement) {
  const that = this
  return new Promise(function (resolve, reject) {
    let blockInstances = []

    const modInstances = []
    const blockPromises = []
    const preModPromises = []

    sceneConfig.contextType = 'scene'

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
        } else {
          for (const ks in projectConfig.modules[k]) {
            if (sceneConfig.modules[k] && !sceneConfig.modules[k][ks]) sceneConfig.modules[k][ks] = projectConfig.modules[k][ks]
          }
        }
      }
    }

    /*
    Create the wrapper template
  */
    let currentStep = 0
    sceneConfig._steps = []
    const steps = sceneConfig._steps

    const child = u.div(`<div 
      class="s ${css.sceneContainer}">
      <div class="sceneObject ${css.scene}">
        <div class="sceneWrapper ${css.wrapper}">
            <div class="${css.content}">
                <div class="layout blocksContainer ${css.viewport}"></div>
            </div>
        </div>
      </div>
    </div>`)
    cont.appendChild(child)

    sceneConfig._el = child
    sceneConfig._rootElement = rootElement
    sceneConfig._mode = projectConfig.mode
    sceneConfig._projectConfig = projectConfig

    /**
    Init blocks if any
    */
    const initBlocks = () => {
      const cblocks = sceneConfig.blocks

      cblocks.forEach((blockConfig, i) => {
        blockConfig._index = i
        blockConfig._portrait = projectConfig._orientation === 'portrait'
        blockConfig._mode = projectConfig.mode
        blockConfig._rootElement = rootElement
        blockConfig._sceneConfig = sceneConfig

        const blocksContainer = child.querySelector('.blocksContainer')
        blockPromises.push(new Block(blocksContainer, blockConfig))
      })
    }

    const initModules = (runBefore) => {
      if (sceneConfig.modules) {
        for (const k in sceneConfig.modules) {
          const modConfig = sceneConfig.modules[k]
          const Mod = modules[k]
          if (!Mod) console.log(`Module "${k}" not found. Maybe you forgot to include it.`)
          if (Mod) {
            if (modConfig) {
              if (Mod.runBefore === true && runBefore) {
                preModPromises.push(new Mod(child, modConfig, sceneConfig))
              }
            }
          }
        }
      }
    }

    const initTransition = () => {
      const wrap = child.querySelector('.sceneObject')
      const odir = sceneConfig._presentatransdir === 'backward' ? 'to-right' : 'to-left'
      const ndir = sceneConfig._presentatransdir === 'backward' ? 'to-left' : 'to-right'
      Transition(wrap)
        .clear(odir)
        .init(ndir)
    }

    that.initTransition = () => {
      console.log('init trans')
      initTransition()
    }

    /*
    Public method called by the container to init the destroy phase
    */
    that.destroyAfter = _t => {
      const wrap = child.querySelector('.sceneObject')
      const odir = sceneConfig._presentatransdir === 'backward' ? 'to-right' : 'to-left'
      const ndir = sceneConfig._presentatransdir === 'backward' ? 'to-left' : 'to-right'
      Transition(wrap)
        .clear(odir)
        .end(ndir)

      const t = _t || 0
      modInstances.forEach(mod => { if (mod.beforeDestroy) mod.beforeDestroy() })
      blockInstances.forEach(block => { if (block.beforeDestroy) block.beforeDestroy() })

      setTimeout(() => {
        that.destroy()
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
      if (child.parentNode) {
        child.parentNode.removeChild(child)
      }
    }

    that.sceneConfig = sceneConfig
    initTransition()
    resolve(that)
    initModules(true)

    Promise.all(preModPromises).then(data => {
      initBlocks()

      Promise.all(blockPromises).then(data => {
        blockInstances = data
        // resolve(that)
      })
    })
  })
}

export { Scene }
