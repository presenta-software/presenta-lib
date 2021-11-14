import u from '../../utils.js'

const caches = []

const cache = function (rootElement, router, ctrlConfig, projectConfig) {}

const addCache = ob => {
  caches.push(ob)
}
u.io.addCache = addCache

cache.run = projectConfig => {
  return new Promise((resolve, reject) => {
    let len = 0
    let cnt = 0

    const checkBlock = block => {
      const isSet = caches.find(d => d.type === block.type)
      if (isSet && block[isSet.field]) blocks.push(block)
    }

    const blocks = []
    projectConfig.scenes.forEach(scene => {
      scene.blocks.forEach(block => {
        checkBlock(block)
      })
    })

    if (blocks.length === 0) resolve()

    blocks.forEach(block => {
      const f = block => {
        fetch(block.url).then(data => {
          data.text().then(data => {
            block._cache = data
            cnt++
            if (cnt === len) resolve()
          })
        }).catch(err => {
          cnt++
          block._cache = err + ': ' + block.url
          if (cnt === len) resolve()
        })
      }
      len++
      f(block)
    })
  })
}

export { cache }
