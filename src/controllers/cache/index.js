import u from '../../utils.js'

const caches = []

const cache = function (rootElement, router, ctrlConfig, projectConfig) {}

const addCache = ob => {
  caches.push(ob)
}
u.io.addCache = addCache

cache.run = config => {
  return new Promise((resolve, reject) => {
    let len = 0
    let cnt = 0

    const blocks = config.scenes.reduce((a, s) => {
      s.blocks.reduce((a2, b) => {
        const blk = caches.find(d => d.type === b.type)
        if (blk && b.url) a.push(b)
      }, [])
      return a
    }, [])

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
