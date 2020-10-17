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
    globprop = globprop.concat(clsType)
  } else {
    globprop.push(clsType)
  }
}

export { globs, addGlob }
