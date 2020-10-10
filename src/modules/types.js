
const modules = {
}

const add = (type, module, override) => {
  if (!override && modules[type]) {
    return console.warn(`module type ${type} already defined`)
  }
  if (override && modules[type]) {
    console.warn(`module type ${type} was overriden`)
  }
  // if (module.init) module.init() // what's that???
  modules[type] = module
}

// add('pagenumber', pagenumber)

export { modules, add }
