
const modules = {
}

const add = (type, module) => {
  if (modules[type]) {
    return console.warn(`module type ${type} already defined`)
  }
  // if (module.init) module.init() // what's that???
  modules[type] = module
}

// add('pagenumber', pagenumber)

export { modules, add }
