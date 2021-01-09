
var prps = [
  'containerPaddingTop',
  'containerPaddingLeft',
  'containerPaddingRight',
  'containerPaddingBottom',

  'colorBack',
  'colorFore',
  'colorAccent',
  'colorAlt',

  'fontText',
  'fontHeading',

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
    prpType.forEach(c => {
      if (prps.indexOf(c) === -1) prps.push(c)
    })
  } else {
    if (prps.indexOf(prpType) === -1)prps.push(prpType)
  }
}

export { props, addProp }
