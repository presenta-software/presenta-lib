import css from './style.css'

const steps = function (sceneElement, modConfig, sceneConfig) {
  if (sceneConfig._mode !== 'present') return

  let allStepElements = []
  const defaultSteps = typeof modConfig === 'string' ? modConfig : '.step'

  let index = 0
  const blocks = sceneConfig.blocks.filter(b => {
    if (b.hasOwnProperty('steps') && !b.steps) {
      return false
    } else {
      return true
    }
  })

  blocks.forEach(b => {
    const blockEl = b._el
    const tag = typeof b.steps === 'string' ? b.steps : defaultSteps
    const tags = tag.split(',')

    let blockStepElements = []

    tags.forEach(tg => {
      const elms = [].slice.call(blockEl.querySelectorAll(tg))
      elms.sort((a, b) => {
        return a.dataset.order - b.dataset.order
      })
      blockStepElements = blockStepElements.concat(elms)
    })

    blockStepElements.forEach(el => {
      el.classList.add(css.step, css.initState)

      const id = {
        sandbox: 'steps',
        index
      }
      sceneConfig._steps.push(id)

      index++
    })

    allStepElements = allStepElements.concat(blockStepElements)
  })

  this.stepForward = step => {
    if (step.sandbox === 'steps') {
      const idx = step.index
      const el = allStepElements[idx]
      el.classList.remove(css.initState)
    }
  }
}

export default steps
