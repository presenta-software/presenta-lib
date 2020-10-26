import css from './style.css'

const steps = function (sceneElement, modConfig, sceneConfig, projectConfig) {
  let allStepElements = []

  let index = 0
  sceneConfig.blocks.forEach(b => {
    const blockEl = b._el
    const tag = b.step || '.step'

    const blockStepElements = [].slice.call(blockEl.querySelectorAll(tag))

    blockStepElements.sort((a, b) => {
      return a.dataset.order - b.dataset.order
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
