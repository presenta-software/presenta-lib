const autoplay = function (rootElement, router, ctrlConfig, projectConfig) {
  let timer = null
  const defdelay = typeof ctrlConfig === 'number' ? ctrlConfig : 4000

  const runTime = (delay) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      router.next()
    }, delay)
  }

  router.on('indexChanged', evt => {
    const cScene = projectConfig.scenes[evt.currentIndex]
    const delay = cScene.autoplay || defdelay
    runTime(delay)
  })
  router.on('stepChanged', evt => {
    const cScene = projectConfig.scenes[evt.currentIndex]
    const delay = cScene.autoplay || defdelay
    runTime(delay)
  })
}

export { autoplay }
