import { controllers } from '../controllers/types.js'
import { modules } from '../modules/types.js'
import { blocks } from '../blocks/types.js'

const plugInit = (all, plugs, store) => {
  const activeKeys = Object.keys(plugs)
  activeKeys.forEach(k => {
    const p = all[k]
    if (p.init) p.init(plugs[k])
    store.push(p)
  })
}

export default config => {
  const plugins = []

  plugInit(controllers, config.controllers, plugins)
  plugInit(modules, config.modules, plugins)

  const blocksKeysArr = config.scenes.reduce((a, s) => {
    s.blocks.reduce((a2, b) => {
      if (a.indexOf(b.type) === -1) a.push(b.type)
    }, [])
    return a
  }, [])
  const blocksKeys = []
  blocksKeysArr.forEach(d => (blocksKeys[d] = true))
  plugInit(blocks, blocksKeys, plugins)

  const all = []
  for (const k in plugins) {
    if (plugins[k].run) {
      all.push(plugins[k].run(config))
    }
  }

  return all
}
