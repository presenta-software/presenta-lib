
/*
paddings: {
  css: '1rem'
}
*/

const paddings = function (element, mod, config) {
  const css = mod.css

  if (css) {
    element.style.setProperty(`--${config.contextType}Padding`, css)
  }
}

paddings.runBefore = true

export default paddings
