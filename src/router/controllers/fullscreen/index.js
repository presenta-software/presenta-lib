const isAlreadyFullscreen = () => {
  return (document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement)
}

const exitFullscreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  }
}

const makeFullscreen = el => {
  if (el.requestFullscreen) {
    el.requestFullscreen()
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen()
  } else if (el.webkitRequestFullscreen) {
    el.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
  } else if (el.msRequestFullscreen) {
    el.msRequestFullscreen()
  }
}

const fullscreen = function (rootElement, router, ctrlConfig, projectConfig) {
  const key = ctrlConfig.key || 'f'

  const rootEl = rootElement.parentNode
  const root = rootEl.parentNode

  const toggle = () => {
    if (isAlreadyFullscreen()) {
      exitFullscreen()
    } else {
      makeFullscreen(root)
    }
  }

  const setKeyListener = e => {
    if (e.key === key) {
      toggle()
      e.stopPropagation()
      e.preventDefault()
    }
  }

  this.toggle = toggle

  rootEl.addEventListener('keyup', setKeyListener)
}

export { fullscreen }
