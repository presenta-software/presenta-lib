const upper = (s) => s.charAt(0).toUpperCase() + s.slice(1)

const rawProps = (key, props, config) => {
  let prps = ''
  for (var k in config) {
    if (props.indexOf(k) >= 0) {
      prps += '--' + key + upper(k) + ':' + config[k] + ';'
    }
  }
  return prps
}

export { rawProps }
