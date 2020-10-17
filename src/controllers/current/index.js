
const current = function (rootElement, router, ctrlConfig, projectConfig) {
  const idx = ctrlConfig &&
    ctrlConfig > 0 &&
    ctrlConfig < projectConfig.scenes.length
    ? ctrlConfig - 1
    : 0
  router.setCurrentIndex(idx)
}

export { current }
