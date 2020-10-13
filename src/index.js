import { version } from '../package.json'
import './core/css/global.css'

import schemes from './schemes/index'
import fontkits from './fontkits/index'

import { Scene } from './core/Scene.js'
import { Container } from './core/Container.js'

import utils from './utils.js'
import defaults from './utils/defaults.js'

import { add as addBlock } from './blocks/types.js'
import { add as addController } from './router/types.js'
import { add as addModule } from './modules/types.js'

const Presenta = function (el, config) {
  defaults(config)
  return new Container(utils.select(el), config)
}

Presenta.version = version
Presenta.utils = utils
Presenta.schemes = schemes
Presenta.fontkits = fontkits
Presenta.Scene = Scene
Presenta.addBlock = addBlock
Presenta.addController = addController
Presenta.addModule = addModule

Presenta.use = plugin => {
  plugin.install(Presenta)
}

export default Presenta
