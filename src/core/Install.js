
const Install = function (config) {
  return new Promise((resolve, reject) => {
    let len = 0
    let cnt = 0

    if (config.length === 0) resolve()

    config.forEach(s => {
      const addSource = url => {
        setTimeout(() => {
          const newScript = document.createElement('script')

          newScript.onerror = (err) => {
            console.log('[Plugin install error]', err)
            cnt++
            if (cnt === len) resolve()
          }
          newScript.onload = (ldr) => {
            console.log('[Plugin install loaded]')
            cnt++
            if (cnt === len) resolve()
          }

          document.body.appendChild(newScript)
          newScript.src = url
        }, len)
      }

      len++
      addSource(s.url)

      if (len === 0) resolve()
    })
  })
}

export { Install }
