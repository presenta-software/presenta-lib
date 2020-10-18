import u from '../../utils.js'

const addLink = (url, type) => {
  const preloadLink = document.createElement('link')
  preloadLink.href = url
  preloadLink.rel = 'preload'
  preloadLink.as = type
  document.head.appendChild(preloadLink)
}

const preloads = []

const preload = function (rootElement, router, ctrlConfig, projectConfig) {
  projectConfig.scenes.forEach(s => {
    s.blocks.forEach(b => {
      const blk = preloads.find(d => d.type === b.type)
      if (blk) {
        addLink(b[blk.field], blk.as)
      }
    })
  })
}

const addPreload = ob => {
  preloads.push(ob)
}
u.io.addPreload = addPreload

export { preload }
