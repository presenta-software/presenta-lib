import { autoplay } from './controllers/autoplay/index.js'
import { keyboard } from './controllers/keyboard/index.js'
import { arrows } from './controllers/arrows/index.js'
import { black } from './controllers/black/index.js'
import { fullscreen } from './controllers/fullscreen/index.js'
import { focus } from './controllers/focus/index.js'
import { preload } from './controllers/preload/index.js'
import { progressbar } from './controllers/progressbar/index.js'
import { pagenum } from './controllers/pagenum/index.js'

const controllers = {
  autoplay,
  keyboard,
  arrows,
  black,
  fullscreen,
  focus,
  preload,
  progressbar,
  pagenum
}

const add = (type, module, override) => {
  if (controllers[type]) {
    return console.warn(`controller io ${type} already defined`)
  }
  if (override && controllers[type]) {
    console.warn(`controller type ${type} was overriden`)
  }
  controllers[type] = module
}

export { controllers, add }
