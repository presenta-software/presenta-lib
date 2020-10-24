import css from './style.css'

const steps = function (sceneElement, modConfig, sceneConfig, projectConfig) {
  sceneConfig.steps = []

  let allSteps = []

  sceneConfig.blocks.forEach(b => {
    const blockEl = b._el
    const tag = b.step || '.step'

    const blockSteps = [].slice.call(blockEl.querySelectorAll(tag))

    blockSteps.forEach(el => {
      el.classList.add(css.step, css.initState)
      sceneConfig.steps.push(0)
    })

    allSteps = allSteps.concat(blockSteps)
  })

  this.stepForward = step => {
    const el = allSteps[step]
    el.classList.remove(css.initState)
  }
}

export default steps
