
const installed = {}
const listeners = []
let loading = false

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
            console.log('[Plugin error]', err)
            cnt++
            if (cnt === len) {
              resolve()
              listeners.forEach(p => {
                p.resolve()
              })
              loading = false
            }
          }
          newScript.onload = (ldr) => {
            console.log('[Plugin loaded]')
            cnt++
            if (cnt === len) {
              resolve()
              listeners.forEach(res => {
                res()
              })
              loading = false
            }
          }

          document.body.appendChild(newScript)
          newScript.src = url
        }, len)
      }

      const addNotifier = url => {
        listeners.push(resolve)
        cnt++
      }

      len++
      if (!installed[s.url]) {
        loading = true
        addSource(s.url)
        installed[s.url] = s
      } else {
        if (loading) {
          addNotifier(s.url)
        } else {
          resolve()
        }
      }

      // if (len === 0) resolve()
    })
  })
}

export { Install }
