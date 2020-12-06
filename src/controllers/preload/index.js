import u from '../../utils.js'

const preloads = []

const preload = function (rootElement, router, ctrlConfig, projectConfig) {}

preload.run = projectConfig => {
  return new Promise((resolve, reject) => {
    let len = 0
    let cnt = 0

    projectConfig.scenes.forEach(s => {
      s.blocks.forEach(b => {
        const blk = preloads.find(d => d.type === b.type)
        if (blk) {
          const addLink = (url, type) => {
            setTimeout(() => {
              const preloadLink = document.createElement('link')
              preloadLink.href = url
              preloadLink.rel = 'preload'
              preloadLink.as = type
              document.head.appendChild(preloadLink)
              cnt++
              if (cnt === len) resolve()
            }, len)
          }
          len++
          addLink(b[blk.field], blk.as)
        }
      })
    })
    if (len === 0) resolve()
  })
}

const addPreload = ob => {
  preloads.push(ob)
}
u.io.addPreload = addPreload

export { preload }
