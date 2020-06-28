const select = selector => {
  return typeof selector === 'string'
    ? document.querySelector(selector)
    : selector
}

export { select }
