import css from './style.css'

const steps = function (sceneElement, modConfig, sceneConfig) {
  if (sceneConfig._mode !== 'present') return

  const sceneMode = sceneConfig.steps || 'sequential'

  const defaultSteps = typeof modConfig === 'string' ? modConfig : '.step'

  const allElems = {}
  let index = 0
  const blocks = sceneConfig.blocks.filter(b => !(b.hasOwnProperty('steps') && !b.steps))

  blocks.forEach(b => {
    const blockEl = b._el
    const tag = typeof b.steps === 'string' ? b.steps : defaultSteps
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
          el.classList.add(css.step, css.initState)

          const id = {
            sandbox: 'steps',
            index,
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
          allElems[sel] = els
        } else {
          allElems[sel] = allElems[sel].concat(els)
        }
      })
    }
  })

  for (const k in allElems) {
    allElems[k].forEach(el => (el.classList.add(css.step, css.initState)))

    const id = {
      sandbox: 'steps',
      index,
      els: allElems[k]
    }
    sceneConfig._steps.push(id)

    index++
  }

  this.stepForward = step => {
    if (step.sandbox === 'steps') {
      const els = step.els
      els.forEach(el => (el.classList.remove(css.initState)))
    }
  }
}

export default steps
