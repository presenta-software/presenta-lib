
const hidden = function (element, mod, config) {
  if (config.contextType !== 'block') return
  const v = mod.value
  if (v) element.style.display = 'none'
}

hidden.runBefore = true

export default hidden
