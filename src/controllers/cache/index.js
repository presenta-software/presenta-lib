import u from '../../utils.js'

const caches = []

const cache = function (rootElement, router, ctrlConfig, projectConfig) {
  projectConfig.scenes.forEach(s => {
    s.blocks.forEach(b => {
      const blk = caches.find(d => d.type === b.type)
      if (blk && b.url) {
        const f = blk => {
          fetch(b.url).then(data => {
            data.text().then(data => {
              b._cache = data
            })
          })
        }
        f(blk)
      }
    })
  })
}

const addCache = ob => {
  caches.push(ob)
}
u.io.addCache = addCache

export { cache }
