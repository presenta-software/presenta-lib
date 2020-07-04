
const keyboard = function (rootElement, router, config) {
  const setKeyListener = e => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      router.next()
    }

    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      router.prev()
    }
  }

  rootElement.addEventListener('keyup', setKeyListener)
}

export { keyboard }
