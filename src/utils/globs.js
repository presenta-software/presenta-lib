const globprop = [
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
  globprop.push(clsType)
}

export { globs, addGlob }
