import { modules } from '../modules/types.js'

const MountBlock = function (blockConfig) {
  const child = blockConfig._el

  const initModules = (runBefore) => {
    if (blockConfig.modules) {
      for (const k in blockConfig.modules) {
        const modConfig = blockConfig.modules[k]
        const Mod = modules[k]
        if (!Mod) console.log(`Module "${k}" not found in block. Maybe you forgot to include it.`)
        if (Mod) {
          if (modConfig) {
            if (!Mod.runBefore && !runBefore) {
              // eslint-disable-next-line
              new Mod(child, modConfig, blockConfig)
            }
          }
        }
      }
    }
  }

  initModules(false)
}

export { MountBlock }
