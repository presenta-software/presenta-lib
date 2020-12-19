import { version } from '../package.json'

import globals from './globals/index'

import { add as addController, controllers } from './controllers/types.js'
import { add as addModule, modules } from './modules/types.js'
import { add as addBlock, blocks } from './blocks/types.js'

import { Splash } from './core/Splash.js'
import { Container } from './core/Container.js'
import { Install } from './core/Install.js'
import { group } from './blocks/group' // this import to avoid circular dependencies warning

import utils from './utils'
import defaults from './utils/defaults'
import pluginsInit from './utils/pluginsInit'
import validate from './utils/validate'

const Presenta = function (el, config) {
  if (!el || !config) return console.log('Missing required parameters, wrapper or config.')

  const isValid = validate(config)
  if (!isValid) {
    return console.log('library init stopped due errors in config')
  }

  defaults(config)

  const splash = new Splash(utils.select(el), config)

  return new Promise((resolve, reject) => {
    new Install(config.plugins).then(() => {
      const all = pluginsInit(config)
      Promise.all(all).then(values => {
        resolve(new Container(utils.select(el), config))
        splash.destroy()
      })
    })
  })
}

addBlock('group', group) // this to avoid circular dependencies warning, since removed implicit inclusion in block types

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

Presenta.intalled = { controllers, modules, blocks }

Presenta.addGlob = utils.addGlob
Presenta.addProp = utils.addProp

Presenta.io = utils.io

Presenta.use = plugin => {
  plugin.install(Presenta)
}

export default Presenta
