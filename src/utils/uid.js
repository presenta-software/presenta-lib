
const md5 = s => s.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0)

const replacer = (key, value) => {
  if (key.indexOf('_') === 0) {
    return undefined
  }
  return value
}

const uid = chunk => {
  return 'uid' + md5(JSON.stringify(chunk, replacer))
}

export { uid }
