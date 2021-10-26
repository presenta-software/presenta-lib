const props = ['top', 'left', 'width', 'height', 'angle', 'right', 'bottom', 'skew']

const applyRawProps = (el, config) => {
  if (typeof config !== 'object') return false
  props.forEach(c => {
    const v = config[c]
    if (v) {
      // legacy
      const col = +v
      if (col && typeof col === 'number') {
        el.style.setProperty('--' + c, col + '%')
      } else {
        el.style.setProperty('--' + c, v)
      }
    }
  })
}

const coords = function (element, mod, config) {
  applyRawProps(element, mod)
}

coords.runBefore = true

export default coords
