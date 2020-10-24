import css from './style.css'

const steps = function (sceneElement, modConfig, sceneConfig, projectConfig) {
  sceneConfig.steps = []
  // const effect = 'bounceIn'

  let tag = ''
  sceneConfig.blocks.forEach(b => {
    const btag = b.step + ', ' || ''
    tag += btag
  })
  tag += 'step'

  const steps = [].slice.call(sceneElement.querySelectorAll(tag))

  steps.forEach(el => {
    el.classList.add(css.step, css.initState)
    sceneConfig.steps.push(0)
  })

  this.stepForward = step => {
    const el = steps[step]
    el.classList.remove(css.initState)
    // el.classList.add('animate__animated', `animate__${effect}`)
  }
}

export default steps
