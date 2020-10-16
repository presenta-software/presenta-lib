import { version } from '../package.json'

import globals from './globals/index'
import { Scene } from './core/Scene.js'
import { Container } from './core/Container.js'

import utils from './utils.js'
import defaults from './utils/defaults.js'

import { add as addBlock } from './blocks/types.js'
import { add as addController } from './router/types.js'
import { add as addModule } from './modules/types.js'
import { add as addClassType } from './utils/globs.js'

const Presenta = function (el, config) {
  defaults(config)
  return new Container(utils.select(el), config)
}

Presenta.version = version
Presenta.utils = utils
Presenta.colors = globals.colors
Presenta.fonts = globals.fonts
Presenta.transitions = globals.transitions
Presenta.layouts = globals.layouts
Presenta.colorvars = globals.colorvars
Presenta.scenevars = globals.scenevars

Presenta.Scene = Scene
Presenta.addBlock = addBlock
Presenta.addController = addController
Presenta.addModule = addModule
Presenta.addClassType = addClassType

Presenta.use = plugin => {
  plugin.install(Presenta)
}

export default Presenta
