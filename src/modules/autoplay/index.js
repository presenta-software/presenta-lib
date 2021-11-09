const autoplay = function (element, mod, config) {
  if (config._mode === 'preview') return
  if (config.contextType === 'block') return

  let timer = null
  const router = config._router

  let defdelay = 4000
  switch (typeof mod) {
    case 'number':
      defdelay = mod
      break

    case 'string':
      defdelay = +mod
      break

    case 'object':
      defdelay = +mod.delay
      break

    default:
      defdelay = 4000
  }

  timer = setTimeout(() => {
    router.next()
  }, defdelay)

  router.on('indexChanged', evt => {
    clearTimeout(timer)
  })
  router.on('stepChanged', evt => {
    clearTimeout(timer)
  })
}

export default autoplay
