import { debug } from './debug/index.js'
import { text } from './text/index.js'
import { embed } from './embed/index.js'
import { images } from './images/index.js'

const blocks = {
  debug,
  text,
  embed,
  images
}

// {type: 'other', module: other}
const add = (type, module) => {
  if (blocks[type]) {
    return console.warn(`module type ${type} already defined`)
  }
  blocks[type] = module
}

export { blocks, add }
