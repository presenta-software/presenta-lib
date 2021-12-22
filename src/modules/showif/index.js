
const showif = function (element, mod, config) {
  const { key, op, value } = mod
  let pass = true
  switch (op) {
    case '==':
      pass = config[key] == value
      break

    case '!=':
      pass = config[key] != value
      break
  }
  if (!pass) element.style.display = 'none'
}

showif.runBefore = true

export default showif
