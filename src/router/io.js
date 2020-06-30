import { autoplay } from './io/autoplay/index.js'
import { keyboard } from './io/keyboard/index.js'
import { arrows } from './io/arrows/index.js'
import { black } from './io/black/index.js'
import { focus } from './io/focus/index.js'

const io = {
  autoplay,
  keyboard,
  arrows,
  black,
  focus
}

const add = (type, module) => {
  if (io[type]) {
    return console.warn(`router io ${type} already defined`)
  }
  io[type] = module
}

export { io, add }
