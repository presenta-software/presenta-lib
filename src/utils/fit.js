const fit = (el, config, par) => {
  const bbox = getComputedStyle(el)
  const cw = +bbox.width.split('px')[0]
  const ch = +bbox.height.split('px')[0]

  const aspect = cw / ch

  par.style.setProperty('--presenta-h', parseInt(960 / aspect) + 'px')

  const w = 960
  const h = 960 / aspect
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
