
var prps = [
  'colorBack',
  'colorFore',
  'colorAccent',
  'colorAlt',

  'scenePadding',
  'sceneBackColor',

  'blockPadding',
  'blockWeight',
  'blockOpacity',
  'blockBlend'
]

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
