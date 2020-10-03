import css from './css/scene.css'
import u from '../utils.js'
import { Block } from './Block.js'
import { modules } from '../modules/types.js'
import { transition } from './transition.js'

const Scene = function (sceneConfig, projectConfig, rootElement) {
  this.blocks = []

  /*
    Let's notify the user about missing fields
  */
  if (!sceneConfig.blocks) {
    return console.warn('No `blocks` array found in scene ' + sceneConfig.index)
  }
  if (sceneConfig.blocks.length === 0) {
    return console.warn('`blocks` is empty in scene ' + sceneConfig.index)
  }

  /*
    Set the module config from project settings
  */
  if (projectConfig.modules) {
    for (const k in projectConfig.modules) {
      if (!sceneConfig.hasOwnProperty('modules')) sceneConfig.modules = {}
      if (!sceneConfig.modules.hasOwnProperty(k)) sceneConfig.modules[k] = projectConfig.modules[k]
    }
  }

  /*
    Check if transition has been defined at project level or scene level
  */
  const hasTransition = projectConfig
    ? projectConfig.transition || sceneConfig.transition
    : sceneConfig.transition

  /*
    Prepare scene props if defined
  */
  const props = u.props(sceneConfig.props)

  /*
    Prepare modules props if defined
  */
  const modprops = { classes: '', styles: '' }
  if (sceneConfig.modules) {
    for (const k in sceneConfig.modules) {
      const cmod = sceneConfig.modules[k]
      if (cmod.props) {
        const mp = u.props(cmod.props, k)
        modprops.classes += mp.classes
        modprops.styles += mp.styles
      }
    }
  }

  /*
    Create the wrapper template
  */
  let currentStep = 0
  const steps = sceneConfig.steps || []

  const child = u.div(`<div 
      class="s ${css.sceneContainer} ${props.classes}"
      style="${props.styles}">
      <div class="sceneObject ${css.scene}">
        <div class="${css.wrapper}">
            <div class="${css.content} ${modprops.classes}" style="${modprops.styles}">
                <div class="backContainer ${css.bcontainer}"></div>
                <div class="blocksContainer ${css.viewport}"></div>
                <div class="frontContainer ${css.fcontainer}"></div>
            </div>
        </div>
      </div>
  </div>`)
  this.el = child

  /*
    Init modules if any
  */
  if (sceneConfig.modules) {
    for (const k in sceneConfig.modules) {
      const modConfig = sceneConfig.modules[k]
      const Mod = modules[k]
      if (!Mod) console.log(`Module "${k}" not found. Maybe you forgot to include it.`)
      if (modConfig && Mod) {
        const mod = new Mod(child.querySelector(`.${css.content}`), modConfig, sceneConfig, projectConfig)
      }
    }
  }

  /*
    Init blocks if any
  */
  const blocks = sceneConfig.blocks
  blocks.forEach(blockConfig => {
    const blocksContainer = child.querySelector('.blocksContainer')
    const block = new Block(blocksContainer, blockConfig, rootElement, projectConfig)
    this.blocks.push(block)
  })

  /*
    Activate the transition system at scene level if requested
  */
  if (sceneConfig.transition) {
    this.el.classList.add(sceneConfig.transition)
  }

  /*
    Define the default scene color class
  */
  if (sceneConfig.variant) {
    this.el.classList.add('colorvar__' + sceneConfig.variant)
  }

  /*
    Activate the theme at scene level if requested
  */
  if (sceneConfig.theme) {
    this.el.classList.add('theme__' + sceneConfig.theme)
  }

  /*
    Run the entering transition
  */
  if (hasTransition) {
    const wrap = this.el.querySelector('.sceneObject')
    const dir = sceneConfig._presentatransdir === 'backward' ? 'to-left' : 'to-right'
    transition(wrap)
      .start(dir)

    setTimeout(() => {
      transition(wrap)
        .swap()
    }, projectConfig._transitionDestroyDelay)
  }

  /*
    Public method called by the container to init the destroy phase
  */
  this.destroyAfter = _t => {
    /*
      Run the exiting transition
    */
    if (hasTransition) {
      const wrap = this.el.querySelector('.sceneObject')
      const odir = sceneConfig._presentatransdir === 'backward' ? 'to-right' : 'to-left'
      const ndir = sceneConfig._presentatransdir === 'backward' ? 'to-left' : 'to-right'
      transition(wrap)
        .clear(odir)
        .end(ndir)
    }

    const t = _t || 0
    this.blocks.forEach(block => block.beforeDestroy())

    setTimeout(() => {
      child.parentNode.removeChild(child)
    }, t)
  }

  /*
    Public method called by the container move forward the step progress
  */
  this.stepForward = () => {
    if (currentStep < steps.length) {
      const idx = steps[currentStep]
      this.blocks[idx].stepForward()
      currentStep++
    }
  }

  /*
    Immediate destroy for garbage collection
  */
  this.destroy = () => {
    this.blocks.forEach(block => block.destroy())
  }

  // this.uid = u.uid(sceneConfig)
  this.sceneConfig = sceneConfig
}

export { Scene }
