import { version } from '../package.json'
import './core/css/global.css'
import './themes/original/index.css'
import './themes/vibrant/index.css'
// blocks
import { text } from './blocks/text/index.js'
import { embed } from './blocks/embed/index.js'
import { images } from './blocks/images/index.js'
import { debug } from './blocks/debug/index.js'
// core
import { Block } from './core/Block.js'
import { Scene } from './core/Scene.js'
import { Container } from './core/Container.js'
// containers
import { show } from './containers/show/index.js'
import { grid } from './containers/grid/index.js'
// helpers
import { add as addBlock } from './blocks/types.js'
import { add as addRouterController } from './router/io.js'
import { add as addModule } from './modules/types.js'

import mergeDefaults from './utils/mergeDefaults.js'

const Presenta = function (el, config) {
  mergeDefaults(config)

  return new Container(el, config)
}

Presenta.version = version
// final blocks
Presenta.Text = text
Presenta.Embed = embed
Presenta.Images = images
Presenta.Debug = debug

// containers
Presenta.Show = show
Presenta.Grid = grid

// core/internals
Presenta.Block = Block
Presenta.Scene = Scene
Presenta.Container = Container

// helpers
Presenta.addBlock = addBlock
Presenta.addRouterController = addRouterController
Presenta.addModule = addModule

export default Presenta
