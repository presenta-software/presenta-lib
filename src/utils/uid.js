
const md5 = s => s.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0)

const uid = chunk => {
  return 'uid' + md5(JSON.stringify(chunk))
}

export { uid }
