import css from './style.css'

const validTrans = ['fadeIn', 'zoomOut', 'zoomIn', 'slideUp', 'slideDown']
const validModes = ['sequential', 'match']

const parseSettings = cnf => {
  let tag = null
  let trans = null
  let mode = null
  let out = null

  if (typeof cnf === 'string') {
    tag = cnf
  }
  if (typeof cnf === 'object') {
    tag = cnf.selector
    trans = cnf.transition
    mode = cnf.mode
    out = cnf.out
  }
  return { tag, trans, mode, out }
}

const steps = function (sceneElement, modConfig, sceneConfig) {
  // we don't want to performe steps in non-presentation mode
  if (sceneConfig._mode !== 'present') return
  if (sceneConfig.contextType !== 'scene') return

  const modSett = parseSettings(modConfig)
  let defTag = modSett.tag || '.step'
  const defOut = modSett.out || false
  let defTrans = modSett.trans || validTrans[0]
  const defMode = modSett.mode || validModes[0]

  const sceneSett = parseSettings(sceneConfig.steps)
  let sceneMode = sceneSett.mode || sceneSett.tag || defMode
  if (validModes.indexOf(sceneMode) === -1) sceneMode = validModes[0]

  defTag = sceneSett.tag || defTag
  defTrans = sceneSett.trans || defTrans

  let index = 0
  const allElems = {}
  let allFlatElems = []
  const blocks = sceneConfig.blocks.filter(b => !(b.hasOwnProperty('steps') && !b.steps))
  let prevEls = null

  blocks.forEach(b => {
    const blockEl = b._el

    const sett = parseSettings(b.steps)
    const tag = sett.tag || defTag
    const out = sett.out || defOut
    let trans = sett.trans || defTrans
    if (validTrans.indexOf(trans) === -1) trans = validTrans[0]

    const tags = tag.split(',')

    const blockStepElements = []

    tags.forEach(tg => {
      const isSingle = tg.indexOf('#') >= 0
      const query = isSingle ? 'querySelector' : 'querySelectorAll'
      const select = blockEl[query](tg)

      if (isSingle) {
        blockStepElements.push({ selector: tg, els: select ? [select] : [] })
      } else {
        const elms = Array.from(select)
        elms.sort((a, b) => {
          return a.dataset.order - b.dataset.order
        })
        blockStepElements.push({ selector: tg, els: elms })
      }
    })

    if (sceneMode === 'sequential') {
      blockStepElements.forEach(ob => {
        const els = ob.els
        allFlatElems = allFlatElems.concat(els)
        els.forEach(el => {
          el.classList.add(css[trans])

          const id = {
            sandbox: 'steps',
            index,
            trans,
            out,
            els: [el]
          }
          sceneConfig._steps.push(id)

          index++
        })
      })
    }

    if (sceneMode === 'match') {
      blockStepElements.forEach(ob => {
        const sel = ob.selector
        const els = ob.els

        if (!allElems[sel]) {
          allElems[sel] = { arr: els, trans, outs: [out] }
        } else {
          allElems[sel].arr = allElems[sel].arr.concat(els)
          allElems[sel].outs.push(out)
        }
      })
    }

    // end blocks
  })

  // routine only for match mode
  for (const k in allElems) {
    const trans = allElems[k].trans
    const outs = allElems[k].outs
    allElems[k].arr.forEach(el => (el.classList.add(css[trans])))

    const id = {
      sandbox: 'steps',
      index,
      trans,
      outs: outs,
      out: outs.find(d => d === true),
      els: allElems[k].arr
    }
    sceneConfig._steps.push(id)

    index++
  }

  // postponing the add of the transition class to avoid initial unwanted transition
  setTimeout(() => {
    // routine only for sequential mode
    allFlatElems.forEach(el => {
      el.classList.add(css.stepItem)
    })
    // routine only for match mode
    for (const k in allElems) {
      allElems[k].arr.forEach(el => (el.classList.add(css.stepItem)))
    }
  }, 100)

  this.stepForward = step => {
    if (step.sandbox === 'steps') {
      if (prevEls) {
        prevEls.forEach((el, i) => {
          const out = step.outs ? step.outs[i] : step.out
          if (out) el.classList.add(css[step.trans])
        })
        prevEls = null
      }
      const els = step.els
      els.forEach(el => (el.classList.remove(css[step.trans])))

      if (step.out) {
        prevEls = els
      }
    }
  }
}

export default steps
