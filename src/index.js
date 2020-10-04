import { version } from '../package.json'
import './core/css/global.css'

import './fontkits/original.css'
import './fontkits/vibrant.css'

import './schemes/original.css'
import './schemes/vibrant.css'

import { Scene } from './core/Scene.js'
import { Container } from './core/Container.js'

import utils from './utils.js'
import mergeDefaults from './utils/mergeDefaults.js'

import { add as addBlock } from './blocks/types.js'
import { add as addController } from './router/io.js'
import { add as addModule } from './modules/types.js'

const Presenta = function (el, config) {
  mergeDefaults(config)
  return new Container(utils.select(el), config)
}

Presenta.version = version
Presenta.utils = utils
Presenta.Scene = Scene
Presenta.addBlock = addBlock
Presenta.addController = addController
Presenta.addModule = addModule

Presenta.use = plugin => {
  plugin.install(Presenta)
}

export default Presenta
