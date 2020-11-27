import css from './style.css'

const validTrans = ['fadeIn', 'zoomOut', 'zoomIn', 'slideUp', 'slideDown']
const validModes = ['sequential', 'match']

const parseSettings = cnf => {
  let tag = null
  let trans = null
  let mode = null

  if (typeof cnf === 'string') {
    tag = cnf
  }
  if (typeof cnf === 'object') {
    tag = cnf.selector
    trans = cnf.transition
    mode = cnf.mode
  }
  return { tag, trans, mode }
}

const steps = function (sceneElement, modConfig, sceneConfig) {
  if (sceneConfig._mode !== 'present') return

  const modSett = parseSettings(modConfig)
  let defTag = modSett.tag || '.step'
  let defTrans = modSett.trans || validTrans[0]
  const defMode = modSett.mode || validModes[0]

  const sceneSett = parseSettings(sceneConfig.steps)
  let sceneMode = sceneSett.mode || defMode
  if (validModes.indexOf(sceneMode) === -1) sceneMode = validModes[0]

  defTag = sceneSett.tag || defTag
  defTrans = sceneSett.trans || defTrans

  let index = 0
  const allElems = {}
  const blocks = sceneConfig.blocks.filter(b => !(b.hasOwnProperty('steps') && !b.steps))

  blocks.forEach(b => {
    const blockEl = b._el

    const sett = parseSettings(b.steps)
    const tag = sett.tag || defTag
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
        els.forEach(el => {
          el.classList.add(css.step, css[trans])

          const id = {
            sandbox: 'steps',
            index,
            trans,
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
          allElems[sel] = { arr: els, trans }
        } else {
          allElems[sel].arr = allElems[sel].arr.concat(els)
        }
      })
    }

    // end blocks
  })

  for (const k in allElems) {
    const trans = allElems[k].trans
    allElems[k].arr.forEach(el => (el.classList.add(css.step, css[trans])))

    const id = {
      sandbox: 'steps',
      index,
      trans,
      els: allElems[k].arr
    }
    sceneConfig._steps.push(id)

    index++
  }

  this.stepForward = step => {
    if (step.sandbox === 'steps') {
      const els = step.els
      els.forEach(el => (el.classList.remove(css[step.trans])))
    }
  }
}

export default steps
