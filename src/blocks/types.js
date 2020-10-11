import { debug } from './debug'
import { text } from './text'
import { embed } from './embed'
import { image } from './image'
import { video } from './video'
import { solid } from './solid'

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
