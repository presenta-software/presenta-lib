
const blocksMainKey = {}

const addBlockMainKey = (type, field) => {
  blocksMainKey[type] = field
}

const setValue = (val, def) => {
  if (!def) return val

  // simple template present
  if (def.indexOf('$$') >= 0) {
    return def.replace(/\$\$/gmi, val)
  }

  let stres = def
  const reg = /\$([a-zA-Z0-9]+)\b/gim
  const res = def.match(reg)

  // no templating present
  if (!res) return val

  const pr = val.split('|')
  const prp = {}
  pr.forEach(p => {
    const sp = p.split(':')
    prp[sp[0]] = sp[1]
  })

  res.forEach(r => {
    const v = prp[r] || ''
    stres = stres.replace(r, v)
  })

  return stres
}

const processScene = (scene, qry) => {
  if (!scene.otherParams) scene.otherParams = {}

  for (const k in qry) {
    const p = qry[k]
    if (!Array.isArray(p)) {
      const block = scene.blocks.find(b => b.ukey === k)
      if (block) {
        if (typeof p === 'object') {
          for (const y in p) {
            const md = p[y]
            if (typeof md === 'object') {
              for (const g in md) {
                if (!block.modules[y]) block.modules[y] = {}
                // module property
                block.modules[y][g] = md[g]
              }
            } else {
              // explicit block property, i.e. my[content]=1
              block[y] = setValue(md, block[y])
            }
          }
        } else {
          // implicit default block property, i.e. my=1
          const d = blocksMainKey[block.type]
          if (d) block[d] = setValue(p, block[d])
        }
      } else {
        scene.otherParams[k] = p
      }
    }
  }
}

const interpolate = (conf, template) => {
  template.scenes.forEach(scene => {
    processScene(scene, conf)
  })

  // multi-frame structured mode
  if (conf.frames) {
    const newScenesList = []

    conf.frames.forEach(frame => {
      const pid = frame.frameID
      const defFrame = template.scenes.find(s => s.pFrameID === pid)
      if (defFrame) {
        const clonedFrame = JSON.parse(JSON.stringify(defFrame))
        processScene(clonedFrame, frame)
        newScenesList.push(clonedFrame)
      } else {
        console.log(`frame ${pid} not found`)
        newScenesList.push({
          blocks: [{
            type: 'text',
            content: `frame ${pid} not found`
          }]
        })
      }
    })

    template.scenes = newScenesList
  }

  return template
}

export { interpolate, blocksMainKey, addBlockMainKey }
