
var prps = []

const props = (wrapper, config) => {
  prps.forEach(p => {
    if (config[p]) {
      const prp = config[p]
      wrapper.style.setProperty('--' + p, prp)
    }
  })
}

const addProp = prpType => {
  if (Array.isArray(prpType)) {
    prps = prps.concat(prpType)
  } else {
    prps.push(prpType)
  }
}

export { props, addProp }
