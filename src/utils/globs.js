var globprop = [
  'transition',
  'colors',
  'fonts',
  'layout',
  'colorVar',
  'blockVar',
  'sceneVar'
]

const globs = (wrapper, config) => {
  globprop.forEach(p => {
    if (config[p]) {
      const prp = config[p]
      wrapper.classList.add(`${p}__${prp}`)
    }
  })
}

const addGlob = clsType => {
  if (Array.isArray(clsType)) {
    clsType.forEach(c => {
      if (globprop.indexOf(c) === -1) globprop.push(c)
    })
  } else {
    if (globprop.indexOf(clsType) === -1) globprop.push(clsType)
  }
}

export { globs, addGlob }
