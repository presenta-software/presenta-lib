import { autoplay } from './io/autoplay/index.js'
import { keyboard } from './io/keyboard/index.js'
import { arrows } from './io/arrows/index.js'
import { black } from './io/black/index.js'
import { fullscreen } from './io/fullscreen/index.js'
import { focus } from './io/focus/index.js'
import { progressbar } from './io/progressbar/index.js'
import { pagenum } from './io/pagenum/index.js'

const io = {
  autoplay,
  keyboard,
  arrows,
  black,
  fullscreen,
  focus,
  progressbar,
  pagenum
}

const add = (type, module) => {
  if (io[type]) {
    return console.warn(`router io ${type} already defined`)
  }
  io[type] = module
}

export { io, add }
