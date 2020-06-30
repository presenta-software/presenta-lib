const focus = function (rootElement, router, config) {
  const clb = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) rootElement.focus({ preventScroll: true })
    })
  }
  const observer = new IntersectionObserver(clb)
  observer.observe(rootElement)
}

export { focus }
