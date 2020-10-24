export default config => {
  const defaultConfig = {
    aspect: 1.6,
    adapt: true,
    mode: 'present',
    controllers: {
      keyboard: true,
      arrows: true,
      black: true,
      fullscreen: true,
      hidden: true
    },
    modules: {
      steps: true
    },
    scheme: null,
    fontkit: null,
    transition: null,
    colorvar: null,
    _transitionDestroyDelay: 1000
  }

  for (const k in defaultConfig) {
    if (!config.hasOwnProperty(k)) {
      config[k] = defaultConfig[k]
    } else {
      if (typeof defaultConfig[k] === 'object') {
        for (const h in defaultConfig[k]) {
          if (config[k] && !config[k].hasOwnProperty(h)) {
            config[k][h] = defaultConfig[k][h]
          }
        }
      }
    }
  }
  return config
}
