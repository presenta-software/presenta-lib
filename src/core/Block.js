import css from './css/block.css'
import u from '../utils.js'
import { blocks } from '../blocks/types'
import { modules } from '../modules/types.js'

const Block = function (blocksElement, blockConfig) {
  const that = this
  return new Promise((resolve, reject) => {
    that.type = blockConfig.aliasType || blockConfig.type
    that.index = blockConfig._index
    let blockInstance = null
    const sceneConfig = blockConfig._sceneConfig || {}

    blockConfig.contextType = 'block'

    const modInstances = []
    const modPromises = []

    if (!that.type) {
      return console.warn('No `type` field found in block ' + that.index)
    }

    /*
    Set the module config from scene settings
  */
    if (sceneConfig.modules) {
      for (const k in sceneConfig.modules) {
        if (!blockConfig.hasOwnProperty('modules')) blockConfig.modules = {}
        if (!blockConfig.modules.hasOwnProperty(k)) {
          blockConfig.modules[k] = sceneConfig.modules[k]
        } else {
          for (const ks in sceneConfig.modules[k]) {
            if (blockConfig.modules[k] && !blockConfig.modules[k][ks]) blockConfig.modules[k][ks] = sceneConfig.modules[k][ks]
          }
        }
      }
    }

    const child = u.div(`<div class="block ${css.block} b b${that.index}">
      <div class="blockContainer ${css.inner}"></div>
    </div>`)

    const blockContainerWrapper = child.querySelector('.blockContainer')
    const blockContainer = u.div(`<div class="blockInnerContainer ${css.subinner}">
    </div>`)

    const initModules = (runBefore) => {
      if (blockConfig.modules) {
        for (const k in blockConfig.modules) {
          const modConfig = blockConfig.modules[k]
          const Mod = modules[k]
          if (!Mod) console.log(`Module "${k}" not found in block. Maybe you forgot to include it.`)
          if (Mod) {
            if (modConfig) {
              if (Mod.runBefore === true && runBefore) {
                const mod = new Mod(child, modConfig, blockConfig)
              } else if (!Mod.runBefore && !runBefore) {
                const mod = new Mod(child, modConfig, blockConfig)
                modPromises.push(mod)
              }
            }
          }
        }
      }
    }

    if (!blocks[that.type]) {
      console.log(`block "${that.type}" not found`)
      resolve(that)
    } else {
      blockContainerWrapper.appendChild(blockContainer)
      initModules(true)

      const prom = new blocks[that.type](blockContainer, blockConfig)

      Promise.all([prom]).then(data => {
        // blockContainerWrapper.appendChild(blockContainer) // this was for alpine
        blockInstance = data[0]

        resolve(that)
        // initModules(false)
        // Promise.all(modPromises).then(data => {
        //   modInstances = data
        //   resolve(that)
        // })
      })
    }

    that.beforeDestroy = () => {
      modInstances.forEach(mod => { if (mod.beforeDestroy) mod.beforeDestroy() })
      if (blockInstance && blockInstance.beforeDestroy) blockInstance.beforeDestroy()
    }

    that.stepForward = (step, index) => {
      if (blockInstance.stepForward) blockInstance.stepForward(step, index)
    }

    that.destroy = () => {
      if (blockInstance && blockInstance.destroy) blockInstance.destroy()

      blocksElement.removeChild(child)

      // if (child.parentNode === blocksElement) {
      //   blocksElement.removeChild(child)
      // }

      // try {
      //   blocksElement.removeChild(child)
      // } catch (e) {
      //   console.log('err')
      // }
    }

    blocksElement.appendChild(child)
    blockConfig._el = child
  })
}

export { Block }
