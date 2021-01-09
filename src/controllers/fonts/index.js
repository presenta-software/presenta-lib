import u from '../../utils.js'

const fonts = function (rootElement, router, ctrlConfig, projectConfig) {}

const addLink = (url) => {
  setTimeout(() => {
    const preloadLink = document.createElement('link')
    preloadLink.href = url
    preloadLink.rel = 'stylesheet'
    preloadLink.type = 'text/css'
    document.head.appendChild(preloadLink)
  })
}

fonts.run = (projectConfig, ctrlConfig) => {
  return new Promise((resolve, reject) => {
    const t = ctrlConfig.text
    const h = ctrlConfig.heading
    const wrap = projectConfig._root
    if (t) {
      addLink(t.url)
      wrap.style.setProperty('--fontText', t.name)
    }
    if (h) {
      addLink(h.url)
      wrap.style.setProperty('--fontHeading', h.name)
    }
    resolve()
  })
}

export { fonts }
