
const keyboard = function (rootElement, router, config) {
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

  rootElement.addEventListener('keyup', setKeyListener)
}

export { keyboard }
