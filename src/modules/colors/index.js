const colorRawList = ['back', 'fore', 'accent', 'alt']

const upp = s => s.charAt(0).toUpperCase() + s.slice(1)

const colors = function (element, mod, config) {
  if (typeof mod !== 'object') return false
  if (config.contextType === 'block') return

  colorRawList.forEach(c => {
    const col = mod[c]
    if (col) element.style.setProperty('--color' + upp(c), mod[c])
  })
}

colors.runBefore = true

export default colors
