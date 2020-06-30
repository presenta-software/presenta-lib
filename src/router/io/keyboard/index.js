const setViewportObserver = child => {
  const clb = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) child.focus({ preventScroll: true })
    })
  }
  const observer = new IntersectionObserver(clb)
  observer.observe(child)
}

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
  setViewportObserver(rootElement)
}

export { keyboard }
