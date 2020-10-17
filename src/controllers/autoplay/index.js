const autoplay = function (rootElement, router, ctrlConfig, projectConfig) {
  let timer = null
  const defdelay = ctrlConfig.delay || 4000
  let lastdelay = 0

  const runTime = (delay) => {
    lastdelay = delay
    clearTimeout(timer)
    timer = setTimeout(() => {
      router.next()
    }, delay)
  }

  router.on('indexChanged', evt => {
    const cScene = projectConfig.scenes[evt.currentIndex]
    const delay = cScene.autoplayDuration || defdelay
    runTime(delay)
  })
}

export { autoplay }
