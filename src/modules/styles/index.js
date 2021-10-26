const props = ['opacity', 'blend', 'radius', 'border', 'padding', 'background', 'color', 'clip', 'shadow']
const upper = (s) => s.charAt(0).toUpperCase() + s.slice(1)

const applyRawProps = (el, config) => {
  if (typeof config !== 'object') return false
  props.forEach(c => {
    const v = config[c]
    el.style.setProperty('--block' + upper(c), v)
  })
}

const styles = function (element, mod, config) {
  applyRawProps(element, mod)
}

styles.runBefore = true

export default styles
