import { autoplay } from './autoplay/index'
import { keyboard } from './keyboard/index'
import { arrows } from './arrows/index'
import { black } from './black/index'
import { fullscreen } from './fullscreen/index'
import { focus } from './focus/index'
import { preload } from './preload/index'
import { progressbar } from './progressbar/index'
import { pagenum } from './pagenum/index'
import { shuffle } from './shuffle/index'
import { loop } from './loop/index'
import { current } from './current/index'
import { hidecursor } from './hidecursor/index'
import { hidden } from './hidden/index'
import { limitswitch } from './limitswitch/index'
import { sync } from './sync/index'
import { sender } from './sender/index'
import { cache } from './cache/index'

const controllers = {
  autoplay,
  keyboard,
  arrows,
  black,
  fullscreen,
  focus,
  preload,
  progressbar,
  pagenum,
  shuffle,
  loop,
  current,
  hidecursor,
  hidden,
  limitswitch,
  sync,
  sender,
  cache
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
