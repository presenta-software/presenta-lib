
const redirect = function (rootElement, router, ctrlConfig, projectConfig) {
  router.on('end', e => {
    location.href = ctrlConfig
  })
}

export { redirect }
