const appendScriptTag = (url, code) => {
  const ns = document.createElement('script')
  ns.setAttribute('class', 'sdpmodulescriptcontainer')
  ns.setAttribute('type', 'module')
  ns.setAttribute('async', '')
  ns.innerHTML = code
  ns.src = url
  document.body.appendChild(ns)
}

const script = function (element, mod, config) {
  if (config._mode === 'preview') return
  if (config.contextType !== 'scene') return

  return new Promise((resolve, reject) => {
    const blink = {}
    config.blocks.forEach(b => {
      blink[b.ukey] = b
    })
    blink._otherParams = config.otherParams
    window._sdpconfigobject = blink

    window._sdpscriptexportedresult = {}

    window._sdpcallbackfunc = () => {
      console.log('_sdpcallbackfunc')
      window._sdpcallbackfunc = null
      window._sdpconfigobject = null

      resolve()
    }

    // remove previous code modules
    const prev = [...document.querySelectorAll('.sdpmodulescriptcontainer')]
    prev.forEach(d => document.body.removeChild(d))

    let code = `
const index = ${config.index}
const exportedResult = window._sdpscriptexportedresult

const params = window._sdpconfigobject._otherParams
    `
    config.blocks.forEach(b => {
      code += `
const ${b.ukey} = window._sdpconfigobject.${b.ukey}
`
    })

    code += `

${mod.header}

try{

${mod.code}

}catch(err){
console.log('error in module', err)
}
export default {}`

    // add the code module
    let url = URL.createObjectURL(new Blob([code], { type: 'application/javascript' }))
    appendScriptTag(url, code)

    // add the last module for callback
    const lastModule = `
import _sdpPrivateInput from '${url}'
window._sdpcallbackfunc()
`

    url = URL.createObjectURL(new Blob([lastModule], { type: 'application/javascript' }))
    appendScriptTag(url, lastModule)
  })
}

script.runBefore = true

export default script
