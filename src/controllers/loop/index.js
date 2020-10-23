const loop = function (rootElement, router, ctrlConfig, projectConfig) {
  router.on('end', evt => {
    router.goto(0)
    // router.notify('nextIndex')
  })
}

export { loop }
