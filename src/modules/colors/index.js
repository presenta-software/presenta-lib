const colorRawList = ['colorBack', 'colorFore', 'colorAccent', 'colorAlt']

const colors = function (element, mod, config) {
  if (typeof mod !== 'object') return false
  if (config.contextType === 'block') return

  colorRawList.forEach(c => {
    const col = mod[c]
    if (col) element.style.setProperty('--' + c, mod[c])
  })
}

export default colors
