import css from './css/block.css'
import u from '../utils.js'
import { blocks } from '../blocks/types'

const Block = function (blocksElement, blockConfig) {
  const that = this
  return new Promise((resolve, reject) => {
    that.type = blockConfig.type
    that.index = blockConfig._index
    var blockInstance = null

    if (!that.type) {
      return console.warn('No `type` field found in block ' + that.index)
    }

    const customSelector = blockConfig.id && blockConfig.id.indexOf('#') === 0 ? `id="${blockConfig.id.replace('#', '')}"` : ''

    const child = u.div(`<div class="block ${css.block} b b${that.index}">
    <div class="backDecoration ${css.bdecoration}"></div>
    <div ${customSelector} class="blockContainer ${css.inner}"></div>
    <div class="frontDecoration ${css.fdecoration}"></div>
  </div>`)
    u.globs(child, blockConfig)
    u.props(child, blockConfig)

    const blockContainer = child.querySelector('.blockContainer')

    if (!blocks[that.type]) {
      console.log(`block "${that.type}" not found`)
    } else {
      const prom = new blocks[that.type](blockContainer, blockConfig)
      Promise.all([prom]).then(data => {
        blockInstance = data[0]
        resolve(that)
      })
    }

    that.beforeDestroy = () => {
      if (blockInstance && blockInstance.beforeDestroy) blockInstance.beforeDestroy()
    }

    that.stepForward = (step, index) => {
      if (blockInstance.stepForward) blockInstance.stepForward(step, index)
    }

    that.destroy = () => {
      if (blockInstance && blockInstance.destroy) blockInstance.destroy()
    }

    blocksElement.appendChild(child)

    blockConfig._el = child
  })
}

export { Block }
