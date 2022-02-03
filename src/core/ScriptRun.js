const appendScriptTag = (url, code, id) => {
  const ns = document.createElement('script')
  ns.setAttribute('class', 'sctcontrollerscriptcontainer' + id)
  ns.setAttribute('type', 'module')
  ns.setAttribute('async', '')
  ns.innerHTML = code
  ns.src = url
  document.body.appendChild(ns)
}

const ScriptRun = function (config) {
  if (config.mode === 'preview') return
  if (!config.script) return

  const mod = config.script

  const id = '_JSCTRL_' + parseInt(Math.random() * 10000)
  const that = this

  return new Promise((resolve, reject) => {
    window['_sctconfigobject' + id] = config

    window['_sctcallbackfunc' + id] = () => {
      window['_sctcallbackfunc' + id] = null
      window['_sctconfigobject' + id] = null
      const prev = [...document.querySelectorAll('.sctcontrollerscriptcontainer' + id)]
      prev.forEach(d => document.body.removeChild(d))
      resolve(that)
    }

    let code = `
const config = window._sctconfigobject${id}
    `

    code += `

${mod.header}

try{

${mod.code}

}catch(err){
   console.log('error in controller', err)
}
export default {}`

    // add the code module
    let url = URL.createObjectURL(new Blob([code], { type: 'application/javascript' }))
    appendScriptTag(url, code, id)

    // add the last module for callback
    const lastModule = `
import _sctPrivateInput from '${url}'
window._sctcallbackfunc${id}()
`

    url = URL.createObjectURL(new Blob([lastModule], { type: 'application/javascript' }))
    appendScriptTag(url, lastModule, id)
  })
}

export { ScriptRun }
