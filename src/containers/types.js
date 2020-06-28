import { grid } from './grid/index.js'
import { show } from './show/index.js'

const containers = {
  grid,
  show
}

const add = (type, module) => {
  if (containers[type]) {
    return console.warn(`container ${type} already defined`)
  }
  containers[type] = module
}

export { containers, add }
