
const appendScriptTag = (url, code, id) => {
  const ns = document.createElement('script')
  ns.setAttribute('class', 'sdpmodulescriptcontainer' + id)
  ns.setAttribute('type', 'module')
  ns.setAttribute('async', '')
  ns.innerHTML = code
  ns.src = url
  document.body.appendChild(ns)
}

const script = function (element, mod, config) {
  if (!mod.forceRun && config._mode === 'preview') return
  if (config.contextType !== 'scene') return

  const id = '_JSMOD_' + parseInt(Math.random() * 10000)
  const that = this

  this.destroy = () => {
    const prev = [...document.querySelectorAll('.sdpmodulescriptcontainer' + id)]
    prev.forEach(d => document.body.removeChild(d))
  }

  return new Promise((resolve, reject) => {
    const blink = {}
    config.blocks.forEach(b => {
      blink[b.ukey] = b
    })
    blink._otherParams = config.otherParams
    window['_sdpconfigobject' + id] = blink

    window['_sdpscriptexportedresult' + id] = {}

    window['_sdpcallbackfunc' + id] = () => {
      console.log('_sdpcallbackfunc' + id)
      window['_sdpcallbackfunc' + id] = null
      window['_sdpconfigobject' + id] = null

      resolve(that)
    }

    let code = `
const index = ${config.index}
const exportedResult = window._sdpscriptexportedresult${id}

const params = window._sdpconfigobject${id}._otherParams
    `
    config.blocks.forEach(b => {
      if (b.ukey) {
        code += `
const ${b.ukey} = window._sdpconfigobject${id}.${b.ukey}
`
      }
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
    appendScriptTag(url, code, id)

    // add the last module for callback
    const lastModule = `
import _sdpPrivateInput from '${url}'
window._sdpcallbackfunc${id}()
`

    url = URL.createObjectURL(new Blob([lastModule], { type: 'application/javascript' }))
    appendScriptTag(url, lastModule, id)
  })
}

script.runBefore = true

export default script
