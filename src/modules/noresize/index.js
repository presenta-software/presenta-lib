import './globals.css'

const noresize = function (sceneElement, modConfig, sceneConfig) {
  const noResize = !!(sceneConfig.noresize || modConfig)
  if (noResize) sceneElement.querySelector('.sceneObject').classList.add('noresize')
}

noresize.def = {
  name: 'No Resize',
  description: '',
  options: [
    { key: 'active', name: 'Active', description: '', type: 'checkbox', value: false }
  ]
}

export default noresize
