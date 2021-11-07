import { keyboard } from './keyboard'
import { arrows } from './arrows'
import { black } from './black'
import { fullscreen } from './fullscreen'
import { focus } from './focus'
import { progressbar } from './progressbar'
import { shuffle } from './shuffle'
import { loop } from './loop'
import { current } from './current'
import { hidecursor } from './hidecursor'
import { hidden } from './hidden'
import { limitswitch } from './limitswitch'
import { sync } from './sync'
import { rsync } from './rsync'
import { transitions } from './transitions'
// import { cache } from './cache'
// import { baseurl } from './baseurl'
// import { preload } from './preload'

const controllers = {
  keyboard,
  arrows,
  black,
  fullscreen,
  focus,
  progressbar,
  shuffle,
  loop,
  current,
  hidecursor,
  hidden,
  limitswitch,
  sync,
  rsync,
  transitions
  // cache,
  // baseurl,
  // preload
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
