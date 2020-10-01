const fit = (el, config, par) => {
  const bbox = getComputedStyle(el)
  const cw = +bbox.width.split('px')[0]
  const ch = +bbox.height.split('px')[0]

  let aspect = config.aspect

  if (config.adapt) {
    const currAspect = cw / ch
    aspect = currAspect
  }

  par.style.setProperty('--h', parseInt(960 / aspect) + 'px')

  const w = 960
  const h = 960 / aspect
  const scaleW = (w) * 100 / cw
  const scaleH = (h) * 100 / ch
  const scale = Math.max(scaleW, scaleH)

  par.style.setProperty('--fz', (1 / (100 / scale)))
}

export { fit }
