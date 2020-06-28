const props = (p, _namespace) => {
  const namespace = _namespace ? _namespace + '__' : ''
  const res = {
    classes: '',
    styles: ''
  }

  if (!p) return res

  for (const k in p) {
    const v = p[k] + ''
    const isclass = v.substr(0, 1) === '.'
    if (isclass) {
      const classname = v.substr(1)
      res.classes += namespace + k + '__' + classname + ' '
    }
  }

  for (const k in p) {
    const v = p[k] + ''
    const isclass = v.substr(0, 1) === '.'
    if (!isclass) res.styles += '--' + namespace + k + ':' + p[k] + ';'
  }

  return res
}

export { props }
