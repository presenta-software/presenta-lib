import { version } from '../package.json'

import globals from './globals/index'

import { controllers, add as addController } from './controllers/types.js'
import { modules, add as addModule } from './modules/types.js'
import { blocks, add as addBlock } from './blocks/types.js'

import { Container } from './core/Container.js'

import utils from './utils.js'
import defaults from './utils/defaults.js'

const Presenta = function (el, config) {
  defaults(config)

  const plugins = { ...controllers, ...modules, ...blocks }
  for (const k in plugins) if (plugins[k].init) plugins[k].init()
  for (const k in plugins) if (plugins[k].run) plugins[k].run(config)

  return new Container(utils.select(el), config)
}

Presenta.version = version
Presenta.colors = globals.colors
Presenta.fonts = globals.fonts
Presenta.transitions = globals.transitions
Presenta.layouts = globals.layouts
Presenta.colorvars = globals.colorvars
Presenta.scenevars = globals.scenevars

Presenta.addBlock = addBlock
Presenta.addController = addController
Presenta.addModule = addModule

Presenta.addGlob = utils.addGlob
Presenta.addProp = utils.addProp

Presenta.io = utils.io

Presenta.use = plugin => {
  plugin.install(Presenta)
}

export default Presenta
