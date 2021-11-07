import { controllers } from '../controllers/types.js'
import u from '../utils.js'
import css from './css/router.css'

const Router = function (rootElement, projectConfig) {
  const child = u.div(`<div class="controller ${css.router}"></div>`)
  rootElement.appendChild(child)

  const scenes = projectConfig.scenes
  const numScenes = () => scenes.length - 1
  const listeners = {}
  const registeredIO = {}

  let currentIndex = 0
  let currentStep = 0

  const numSteps = () => {
    return scenes[currentIndex] &&
        scenes[currentIndex]._steps
      ? scenes[currentIndex]._steps.length
      : 0
  }

  const updateRouterWrapper = () => {
    const sceneConfig = scenes[currentIndex]
    child.classList.remove(...child.classList)
    child.classList.add('controller', css.router)
    child.style = null
    // u.globs(child, sceneConfig)
    // u.props(child, sceneConfig)
  }

  this.next = () => {
    if (currentStep === numSteps()) {
      this.nextIndex()
    } else {
      currentStep++
      notify('stepChanged')
    }
    notify('next')
  }
  this.prev = () => {
    this.prevIndex()
    notify('prev')
  }

  this.nextIndex = () => {
    if (currentIndex < numScenes()) {
      currentIndex++
      currentStep = 0
      notify(['nextIndex', 'indexChanged'])
    } else {
      currentIndex = numScenes()
      currentStep = numSteps()
      notify('end')
    }
    // setNumSteps()
  }
  this.prevIndex = () => {
    if (currentIndex > 0) {
      currentIndex--
      currentStep = 0
      notify(['prevIndex', 'indexChanged'])
    } else {
      currentIndex = 0
      currentStep = 0
      notify('begin')
    }
    // setNumSteps()
  }

  this.goto = v => {
    const dir = currentIndex > v ? 'prevIndex' : 'nextIndex'
    currentIndex = v < numScenes() ? v : numScenes()
    currentStep = 0
    notify(['goto', dir, 'indexChanged'])
  }

  const notify = evt => {
    const evts = Array.isArray(evt) ? evt : [evt]

    evts.forEach(ev => {
      // if (ev === 'indexChanged') updateRouterWrapper()

      if (listeners[ev]) {
        listeners[ev].forEach(clb => {
          clb({
            name: ev,
            currentIndex,
            currentStep,
            totalScenes: this.totalScenes(),
            totalSteps: numSteps(),
            isFirst: this.isFirst(),
            isLast: this.isLast()
          })
        })
      }
    })
  }

  const dispatch = (name, params) => {
    if (listeners[name]) {
      listeners[name].forEach(clb => {
        clb(params)
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

  this.destroy = () => {
    for (const k in listeners) {
      listeners[k] = null
      delete listeners[k]
    }
  }

  this.totalScenes = () => numScenes() + 1
  this.totalSteps = () => numSteps()
  this.currentIndex = () => currentIndex
  this.currentStep = () => currentStep
  this.isFirst = () => currentIndex === 0
  this.isLast = () => currentIndex === numScenes()
  this.setCurrentIndex = idx => (currentIndex = idx)
  this.setCurrentStep = stp => (currentStep = stp)
  this.controllers = registeredIO
  this.dispatch = dispatch

  if (projectConfig.controllers) {
    for (const k in projectConfig.controllers) {
      const modConfig = projectConfig.controllers[k]
      const Mod = controllers[k]
      if (!Mod) console.log(`Controller "${k}" not found. Maybe you forgot to include it.`)
      if (modConfig && Mod) {
        const md = new Mod(child, this, modConfig, projectConfig)
        registeredIO[k] = md
        if (modConfig.ignorePad) {
          if (md._el) {
            md._el.classList.add(css.ignorePad)
          } else {
            console.warn(`Controller ${k} uses ignorePad but _el is undefined`)
          }
        }
      }
    }
  }

  notify('indexChanged')

  setTimeout(() => {
    notify('init')
    setTimeout(() => {
      notify('inited')
    })
  })
}

export { Router }
