const fit = (el, config, par) => {
  const columns = config.columns || 1
  const padding = config.padding || 0
  const bbox = getComputedStyle(el)
  const cw = +bbox.width.split('px')[0]
  const ch = +bbox.height.split('px')[0]

  let aspect = config.aspect || 1.6

  if (config.adapt) {
    const currAspect = cw / ch
    aspect = currAspect
  }

  par.style.setProperty('--h', parseInt(960 / aspect) + 'px')

  const pad = padding * columns
  const w = 960
  const h = 960 / aspect
  const scaleW = (w + pad) * 100 / cw
  const scaleH = (h + pad) * 100 / ch
  let scale = Math.max(scaleW, scaleH)

  if (columns > 1) scale = (w + pad) * 100 / cw

  par.style.setProperty('--fz', (1 / (100 / scale) * columns))
}

export { fit }
