import { text } from './text'
import { embed } from './embed'
import { image } from './image'
import { video } from './video'
import { svg } from './svg'
import { shape } from './shape'
import { line } from './line'
import { gtext } from './gtext'

const blocks = {
  text,
  embed,
  image,
  video,
  svg,
  shape,
  line,
  gtext
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
