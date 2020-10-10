import { debug } from './debug/index.js'
import { text } from './text/index.js'
import { embed } from './embed/index.js'
import { image } from './image/index.js'
import { video } from './video/index.js'
import { solid } from './solid/index.js'

const blocks = {
  debug,
  text,
  embed,
  image,
  video,
  solid
}

const add = (type, module, override) => {
  if (blocks[type]) {
    return console.warn(`block type ${type} already defined`)
  }
  if (override && blocks[type]) {
    console.warn(`block type ${type} was overriden`)
  }
  blocks[type] = module
}

export { blocks, add }
