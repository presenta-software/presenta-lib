import { text } from './text'
import { embed } from './embed'
import { image } from './image'
import { video } from './video'
import { svg } from './svg'

const blocks = {
  text,
  embed,
  image,
  video,
  svg
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
