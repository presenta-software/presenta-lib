
import { io } from './io.js'
import u from '../utils.js'
import css from './router.css'

const Router = function (rootElement, projectConfig) {
  const child = u.div(`<div class="${css.router}"></div>`)
  rootElement.appendChild(child)
  child.setAttribute('tabindex', '0')

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

  setNumSteps()

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
      setNumSteps()
      this.notify('nextIndex')
      this.notify('indexChanged')
    } else {
      currentIndex = numScenes
      currentStep = 0
      this.notify('end')
    }
  }
  this.prevIndex = () => {
    if (currentIndex > 0) {
      currentIndex--
      currentStep = 0
      setNumSteps()
      this.notify('prevIndex')
      this.notify('indexChanged')
    } else {
      currentIndex = 0
      currentStep = 0
      this.notify('begin')
    }
  }

  this.goto = v => {
    currentIndex = v < numScenes ? v : numScenes
    currentStep = 0
    this.notify('nextIndex')
    this.notify('indexChanged')
  }

  this.notify = evt => {
    const sceneConfig = scenes[currentIndex]
    const props = u.props(sceneConfig.props)
    child.classList.remove(...child.classList)
    child.classList.add(css.router)
    if (props.classes) {
      const cls = props.classes.split(' ')
      cls.forEach(c => {
        const cc = c.trim()
        if (cc) child.classList.add(cc)
      })
    }

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

  if (projectConfig.router) {
    for (const k in projectConfig.router) {
      const modConfig = projectConfig.router[k]
      const Mod = io[k]
      if (!Mod) console.log(`Router module "${k}" not found. Maybe you forgot to include it.`)
      if (modConfig && Mod) {
        registeredIO[k] = new Mod(child, this, modConfig, projectConfig)
      }
    }
  }

  this.notify('indexChanged')
}

export { Router }
