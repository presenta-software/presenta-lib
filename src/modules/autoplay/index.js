const autoplay = function (sceneElement, modConfig, sceneConfig) {
  if (sceneConfig._mode === 'preview') return

  let timer = null
  const router = sceneConfig._router

  let defdelay = 4000
  switch (typeof modConfig) {
    case 'number':
      defdelay = modConfig
      break

    case 'string':
      defdelay = +modConfig
      break

    case 'object':
      defdelay = +modConfig.delay
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
