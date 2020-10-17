import u from '../../utils.js'

const addLink = (url, type) => {
  const preloadLink = document.createElement('link')
  preloadLink.href = url
  preloadLink.rel = 'preload'
  preloadLink.as = type
  document.head.appendChild(preloadLink)
}

const preload = function (rootElement, router, ctrlConfig, projectConfig) {
  projectConfig.scenes.forEach(s => {
    s.blocks.forEach(b => {
      const blk = u.preloads.find(d => d.type === b.type)
      if (blk) {
        addLink(b[blk.field], blk.as)
      }
    })
  })
}

export { preload }
