const globprop = ['transition', 'colors', 'fonts', 'layout', 'colorvar', 'blockvar', 'scenevar']

const globs = (wrapper, config) => {
  globprop.forEach(p => {
    if (config[p]) {
      const prp = config[p]
      wrapper.classList.add(`${p}__${prp}`)
    }
  })
}

const add = clsType => {
  globprop.push(clsType)
}

export { globs, add }
