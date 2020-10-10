const addLink = (url, type) => {
  const preloadLink = document.createElement('link')
  preloadLink.href = url
  preloadLink.rel = 'preload'
  preloadLink.as = type
  document.head.appendChild(preloadLink)
}

/*
How to support images in text element?
*/

const preload = function (rootElement, router, ctrlConfig, projectConfig) {
  projectConfig.scenes.forEach(s => {
    s.blocks.forEach(b => {
      if (b.type === 'image' || b.type === 'video') {
        addLink(b.url, b.type)
      }
    })
  })
}

export { preload }
