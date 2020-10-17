const focus = function (rootElement, router, ctrlConfig, projectConfig) {
  const root = rootElement.parentNode
  const clb = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) root.focus({ preventScroll: true })
    })
  }
  const observer = new IntersectionObserver(clb)
  observer.observe(root)
}

export { focus }
