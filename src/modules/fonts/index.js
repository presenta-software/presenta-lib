import u from '../../utils.js'

/*
modules:{
    fonts:{
        fontText:'.ttf',
        fontHead:'.ttf',
        fontAlt:'.ttf'
    }
}
*/

const fonts = function (element, mod, config) {
  if (typeof mod !== 'object') return false
  if (config.contextType === 'block') return

  const that = this
  return new Promise((resolve, reject) => {
    const variants = ['Text', 'Head', 'Alt']

    variants.forEach(v => {
      const url = mod['font' + v]

      if (url) {
        const name = u.addFontDep(url)
        element.style.setProperty('--font' + v, name)
      }
    })

    resolve(that)
  })
}

fonts.runBefore = true

const already = {}

fonts.run = projectConfig => {
  const keys = ['fontText', 'fontHead', 'fontAlt']
  let len = 0
  let cnt = 0
  return new Promise((resolve, reject) => {
    const fts = projectConfig.modules.fonts
    if (fts) {
      keys.forEach(k => {
        const url = fts[k]
        if (url) {
          len++
          if (!already[url]) {
            already[url] = true
            fetch(fts[k]).then(data => {
              cnt++
              if (len === cnt) resolve()
            })
          } else {
            cnt++
            if (len === cnt) resolve()
          }
        }
      })
      if (len === 0) resolve()
    } else {
      resolve()
    }
  })
}

export default fonts
