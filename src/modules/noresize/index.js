import './globals.css'

const noresize = function (sceneElement, modConfig, sceneConfig) {
  const noResize = !!(sceneConfig.noresize || modConfig)
  if (noResize) sceneElement.querySelector('.sceneObject').classList.add('noresize')
}

export default noresize
