
import { controllers } from '../controllers/types.js'
import u from '../utils.js'
import css from './css/router.css'

const Router = function (rootElement, projectConfig) {
  const child = u.div(`<div class="controller ${css.router}"></div>`)
  rootElement.appendChild(child)

  const scenes = projectConfig.scenes
  const numScenes = scenes.length - 1
  const listeners = {}
  const registeredIO = {}

  let currentIndex = 0
  let currentStep = 0
  let numSteps = 0

  const setNumSteps = () => {
    numSteps = scenes[currentIndex] &&
        scenes[currentIndex].steps
      ? scenes[currentIndex].steps.length
      : 0
  }
  // setNumSteps()

  const updateRouterWrapper = () => {
    const sceneConfig = scenes[currentIndex]

    child.classList.remove(...child.classList)
    child.classList.add('controller', css.router)
    child.style = null
    u.globs(child, sceneConfig)
    u.props(child, sceneConfig)
  }

  this.next = () => {
    if (currentStep === numSteps) {
      this.nextIndex()
    } else {
      currentStep++
      this.notify('stepChanged')
    }
  }
  this.prev = () => {
    this.prevIndex()
  }

  this.nextIndex = () => {
    if (currentIndex < numScenes) {
      currentIndex++
      currentStep = 0
      this.notify('nextIndex')
      this.notify('indexChanged')
    } else {
      currentIndex = numScenes
      currentStep = 0
      this.notify('end')
    }
    setNumSteps()
  }
  this.prevIndex = () => {
    if (currentIndex > 0) {
      currentIndex--
      currentStep = 0
      this.notify('prevIndex')
      this.notify('indexChanged')
    } else {
      currentIndex = 0
      currentStep = 0
      this.notify('begin')
    }
    setNumSteps()
  }

  this.goto = v => {
    currentIndex = v < numScenes ? v : numScenes
    currentStep = 0
    this.notify('nextIndex')
    this.notify('indexChanged')
  }

  this.notify = evt => {
    if (evt === 'indexChanged') updateRouterWrapper()

    if (listeners[evt]) {
      listeners[evt].forEach(clb => {
        clb({
          currentIndex,
          currentStep,
          totalScenes: this.totalScenes(),
          isFirst: currentIndex === 0,
          isLast: currentIndex === numScenes
        })
      })
    }
  }

  this.on = (evt, clb) => {
    if (!listeners[evt]) {
      listeners[evt] = []
    }
    listeners[evt].push(clb)
  }

  this.off = (evt, clb) => {
    const index = listeners[evt].indexOf(clb)
    if (index >= 0) listeners[evt].splice(index, 1)
  }

  this.totalScenes = () => numScenes + 1
  this.totalSteps = () => numSteps
  this.currentIndex = () => currentIndex
  this.currentStep = () => currentStep
  this.setCurrentIndex = idx => (currentIndex = idx)
  this.setCurrentStep = stp => (currentStep = stp)
  this.controllers = registeredIO

  if (projectConfig.controllers) {
    for (const k in projectConfig.controllers) {
      const modConfig = projectConfig.controllers[k]
      const Mod = controllers[k]
      if (!Mod) console.log(`Controller "${k}" not found. Maybe you forgot to include it.`)
      if (modConfig && Mod) {
        registeredIO[k] = new Mod(child, this, modConfig, projectConfig)
      }
    }
  }

  this.notify('indexChanged')

  setTimeout(() => {
    this.notify('init')
    setNumSteps()
  })
}

export { Router }
