
const showif = function (element, mod, config) {
  const { key, op, value } = mod

  const prop = key.split('.').reduce((o, i) => o[i], config)

  let pass = true
  switch (op) {
    case '==':
      pass = prop === value
      break

    case '!=':
      pass = prop !== value
      break
  }
  if (!pass) element.style.display = 'none'
}

showif.runBefore = true

export default showif
