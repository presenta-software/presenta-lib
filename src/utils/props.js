const props = (wrapper, p) => {
  for (const k in p) {
    const v = p[k] + ''
    const isclass = v.substr(0, 1) === '.'

    if (isclass) {
      const classname = v.substr(1)
      const cls = k + '__' + classname
      wrapper.classList.add(cls)
    } else {
      wrapper.style.setProperty('--' + k, p[k])
    }
  }
}

export { props }
