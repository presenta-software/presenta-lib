import { version } from '../package.json'

import './core/css/globals.css'

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

  const hasErr = validate(config)
  const isBlocking = hasErr.filter(d => d.hard)
  if (isBlocking.length > 0) {
    return new Promise((resolve, reject) => {
      reject(hasErr)
    })
  }

  if (hasErr.length > 0) hasErr.forEach(e => (console.warn(e.message)))

  defaults(config)

  const root = utils.select(el)
  config._root = root

  const splash = new Splash(root, config)

  return new Promise((resolve, reject) => {
    new Install(config.plugins).then(() => {
      const all = pluginsInit(config)
      Promise.all(all).then(values => {
        resolve(new Container(root, config))
        splash.destroy()
      })
    })
  })
}

addBlock('group', group) // this to avoid circular dependencies warning, since removed implicit inclusion in block types

Presenta.version = version

Presenta.addBlock = addBlock
Presenta.addController = addController
Presenta.addModule = addModule

Presenta.installed = { controllers, modules, blocks }

Presenta.addGlob = utils.addGlob
Presenta.addProp = utils.addProp

Presenta.io = utils.io

Presenta.use = plugin => {
  plugin.install(Presenta)
}

export default Presenta
