
const keyboard = function (rootElement, router, ctrlConfig, projectConfig) {
  const setKeyListener = e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      router.next()
      e.stopPropagation()
      e.preventDefault()
    }

    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      router.prev()
      e.stopPropagation()
      e.preventDefault()
    }
  }

  rootElement.parentNode.addEventListener('keyup', setKeyListener)
}

export { keyboard }
