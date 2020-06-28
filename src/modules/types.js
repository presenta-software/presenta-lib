import { pagenumber } from './pagenumber/index.js'

const modules = {
  pagenumber
}

const add = (type, module) => {
  if (modules[type]) {
    return console.warn(`module type ${type} already defined`)
  }
  modules[type] = module
}

export { modules, add }
