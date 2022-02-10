const fit = (el, config, par) => {
  const bbox = getComputedStyle(el)
  const cw = +bbox.width.split('px')[0]
  const ch = +bbox.height.split('px')[0]

  const aspect = cw / ch

  let ow = 960
  if (config.format) {
    if (config.format.width) {
      ow = +config.format.width
    }
  }

  par.style.setProperty('--presenta-pw', parseInt(ow))
  par.style.setProperty('--presenta-vp', parseInt(ow))
  par.style.setProperty('--presenta-w', parseInt(ow) + 'px')
  par.style.setProperty('--presenta-h', parseInt(ow / aspect) + 'px')

  const w = ow
  const h = ow / aspect
  const scaleW = (w) * 100 / cw
  const scaleH = (h) * 100 / ch
  const scale = Math.max(scaleW, scaleH)

  let orient = 'landscape'
  if (w < h) {
    orient = 'portrait'
  }
  par.classList.add(orient)
  config._orientation = orient

  par.style.setProperty('--presenta-fz', (1 / (100 / scale)))
}

export { fit }
