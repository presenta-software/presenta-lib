import u from '../../utils'

const props = ['opacity', 'blend', 'radius', 'border', 'padding', 'background', 'color', 'clip', 'shadow']
const upper = (s) => s.charAt(0).toUpperCase() + s.slice(1)

const applyRawProps = (el, config) => {
  if (typeof config !== 'object') return false
  props.forEach(c => {
    const v = config[c]
    if (v) el.style.setProperty('--block' + upper(c), v)
  })
}

const styles = function (element, mod, config) {
  if (config.contextType !== 'block') return
  applyRawProps(element, mod)

  if (mod.svgClip) {
    const svg = u.div(mod.svgClip)
    const cpath = svg ? svg.querySelector('clipPath') : null
    const cid = cpath ? cpath.getAttribute('id') : null
    if (cid) {
      element.append(svg)
      element.style.setProperty('--blockClip', `url(#${cid})`)
    }
  }
}

styles.runBefore = true

export default styles
