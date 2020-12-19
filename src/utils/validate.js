export default config => {
  let status = true
  if (!config.scenes) {
    console.error('No `scenes` array found')
    status = false
  }

  config.scenes.forEach((s, i) => {
    if (!s.blocks) {
      console.error(`No 'blocks' array in scene ${i} found`)
      status = false
    }
  })

  if (config.scenes.length === 0) {
    console.warn('`scenes` is empty')
  }

  return status
}
