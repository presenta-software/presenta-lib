import u from '../../utils.js'

const parser = new DOMParser()

const inferHTML = (ob, base) => {
  const dom = parser.parseFromString(ob.text, 'text/html').body
  const images = dom.querySelectorAll('img')
  const imagesArr = Array.from(images)
  imagesArr.forEach(img => {
    const src = img.getAttribute('src')
    var r = new RegExp('^(?:[a-z]+:)?//', 'i')
    if (!r.test(src)) {
      img.src = base + src
    }
  })
  ob.text = dom.innerHTML
}

const infer = (ob, field, base) => {
  const val = ob[field]
  if (val && base) {
    var r = new RegExp('^(?:[a-z]+:)?//', 'i')
    if (!r.test(val)) {
      ob[field] = base + val
    }
  }
}

const baseurls = []

const baseurl = function (rootElement, router, ctrlConfig, projectConfig) {}

const inferBlock = (block, base) => {
  const blk = baseurls.find(d => d.type === block.type)
  if (blk) {
    if (blk.html) {
      inferHTML(block, base)
    } else {
      infer(block, blk.field, base)
    }
  }
}

baseurl.run = (config, pconf) => {
  return new Promise((resolve, reject) => {
    const base = pconf
    config.scenes.forEach(scene => {
      scene.blocks.forEach(block => {
        const blks = block.type === 'group' ? block.blocks : [block]
        blks.forEach(block => { inferBlock(block, base) })
      })
    })
    resolve()
  })
}

const addBaseurl = ob => {
  baseurls.push(ob)
}
u.io.addBaseurl = addBaseurl

export { baseurl }
