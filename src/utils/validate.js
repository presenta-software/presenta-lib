import { version } from '../../package.json'

export default config => {
  const err = []

  if (config.version) {
    err.push({
      message: 'Config version is different from Library version'
    })
  }

  if (!config.scenes) {
    err.push({
      hard: true,
      message: 'No `scenes` array found'
    })
  }

  config.scenes.forEach((s, i) => {
    if (!s.blocks) {
      err.push({
        hard: true,
        message: `No 'blocks' array in scene ${i} found`
      })
    }
  })

  if (config.scenes.length === 0) {
    err.push({
      hard: true,
      message: '`scenes` is empty'
    })
  }

  return err
}
